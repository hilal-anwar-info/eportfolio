%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%                                                                         %
%                                 BE OFDM                                 %
%                                                                         %
%                               HILAL Anwar                               %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
clear all
close all

%% II. Implantation de la chaine de transmission OFDM sans canal
%% II.1 Emission


% Paramètres
bps   = 1;          % Bits par symbole (BPSK)
M     = 2^bps;      % Ordre de modulation
nFFT  = 16;
m     = 1000;      % Nombre de blocs OFDM

%% II.1.1. Une seule porteuse parmi 16 est utilisées. Les autres seront 
% mise à zéro

txsymbols = zeros(nFFT,m);
txsymbols(1,:) = randi([0 M-1], 1, m);

De = pskmod(txsymbols,M);

Xe = ifft(De);

Xe = Xe(:);

figure(1);
pwelch(Xe.',[],[],[],1,'twosided')
title('DSP (une seule porteuse)');


%% II.1.2. Deux porteuse parmi 16 est utilisées. Les autres seront mise 
% à zéro

txsymbols = zeros(nFFT,m);
txsymbols(1,:) = randi([0 M-1], 1, m);
txsymbols(5,:) = randi([0 M-1], 1, m);

De = pskmod(txsymbols,M);

Xe = ifft(De);

Xe = Xe(:);

figure(2);
pwelch(Xe.',[],[],[],1,'twosided')
title('DSP (deux porteuse)')

%% II.1.3. Les 8 porteuses centrales sont utilisées. Les autres seront mise
% à zéro

for i=5:12
  txsymbols(i,:) = randi([0 M-1], 1, m);  
end

De = pskmod(txsymbols,M);

Xe = ifft(De);
Xe = Xe(:);

figure(3);
pwelch(Xe.',[],[],[],1,'twosided')
title('DSP (8 porteuse centrales)')

%% II.2 Réception sans canal

txsymbols = randi([0 M-1], nFFT, m);

De = pskmod(txsymbols,M);

Xe = ifft(De);

Ds = fft(Xe);

rxsymbols = pskdemod(Ds,M);

nb_diff = sum(txsymbols(:) ~= rxsymbols(:));

TEB = nb_diff/ numel(txsymbols);
disp(['TEB pour une chaine sans canal de propagation : ' num2str(TEB)]);  


%% III. Implantation de la chaine de transmission OFDM avec canal 
% multi-trajets, sans bruit

% Paramètres
bps   = 1;          % Bits par symbole (BPSK)
M     = 2^bps;      % Ordre de modulation
nFFT  = 16;
m     = 1000;      % Nombre de blocs OFDM
N     = nFFT/4;     % Nombre de trajets

% Génération des symboles
txsymbols = randi([0 M-1], nFFT, m);

% Modulation BPSK
De = pskmod(txsymbols, M);

% OFDM : IFFT
Xe = ifft(De);

% Génération d’un canal multitrajets, sans bruit
P     = exp(-(0:N-1));  
P     = P / sum(P);

beta  = (randn(N,1) + 1i*randn(N,1)) .* sqrt(0.5*P(:));
beta  = beta / norm(beta);

% Réponse fréquentielle du canal
H = fft(beta, nFFT);

% Axe fréquentiel continu 
k = linspace(0, nFFT-1, 4000);  

% Axe discret correspondant à H 
k_discret = 0:nFFT-1;

% Interpolation de H sur l'axe continu 
H_interp = interp1(k_discret, H, k, 'spline');   


%% III.1. Implantation sans intervalle de garde

X = Xe(:);                    % On met tout bout à bout
Xc = zeros(length(X)+N, N);  

for j = 1:N
    Xc(j:j+length(X)-1, j) = X;
end

Xc = Xc * beta;             % Signal filtré
Xc = Xc(1:end-N);           % On enlève la queue

Ds = fft(reshape(Xc, [nFFT, m]));

rxsymbols = pskdemod(Ds,M);

% le module et la phase de la réponse en fréquence de votre canal 
% de propagation

figure(4);
plot(k, abs(H_interp));
xlabel('Indice de fréquence k ');
ylabel('|H(k)|');
title('Module de la réponse en fréquence du canal');

figure(5);
plot(k, angle(H_interp)*180/pi); 
xlabel('Indice de fréquence k (continu)');
ylabel('Phase de H(k)');
title('Phase de la réponse en fréquence du canal');

% la densité spectrale de puissance du signal en sortie du canal 
% et celle obtenue avant passage dans le canal
figure(6);
pwelch(Xe.', [], [], [], 1, 'twosided');
title('DSP du signal avant passage dans le canal (sans intervalle de garde)');

figure(7);
pwelch(Xc.', [], [], [], 1, 'twosided');
title('DSP du signal en sortie du canal (sans intervalle de garde)');

% Affichage constellation
k = 6;
figure(8);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['sans intervalle de garde : Constellation de la sous-porteuse k = ' num2str(k)]);

k = 15;
figure(9);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['sans intervalle de garde : Constellation de la sous-porteuse k = ' num2str(k)]);

% Vérification des erreurs
nb_diff = sum(txsymbols(:) ~= rxsymbols(:));

TEB = nb_diff/ numel(txsymbols);
disp(['TEB pour une chaine avec canal de propagation sans intervalle de garde : ' num2str(TEB)]);

%% III.2. Implantation avec intervalle de garde composé de zéro

z = 3*N;
Zero = zeros(z,m);
X = [Zero; Xe];  

X = X(:);                    % On met tout bout à bout
Xc = zeros(length(X)+N, N);  

for j = 1:N
    Xc(j:j+length(X)-1, j) = X;
end

Xc = Xc * beta;             % Signal filtré
Xc = Xc(1:end-N);           % On enlève la queue 
Xs = reshape(Xc, [nFFT+z, m]);
Ds = fft(Xs(z+1:z+nFFT,:));

rxsymbols = pskdemod(Ds,M);

% Affichage constellation
k = 6;
figure(10);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['avec intervalle de garde composé de zéros : Constellation de la sous-porteuse k = ' num2str(k)]);

k = 15;
figure(11);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['avec intervalle de garde composé de zéros : Constellation de la sous-porteuse k = ' num2str(k)]);


% Vérification des erreurs
nb_diff = sum(txsymbols(:) ~= rxsymbols(:));

TEB = nb_diff/ numel(txsymbols);
disp(['TEB pour une chaine avec canal de propagation et avec intervalle de garde composé de zéros : ' num2str(TEB)]);

%% III.3. Implantation avec préfixe cyclique

pc = 3*N;
X = [Xe(nFFT-pc+1:nFFT,:); Xe];  



X = X(:);                    % On met tout bout à bout
Xc = zeros(length(X)+N, N);  

for j = 1:N
    Xc(j:j+length(X)-1, j) = X;
end

Xc = Xc * beta;             % Signal filtré
Xc = Xc(1:end-N);           % On enlève la queue
Xs = reshape(Xc, [nFFT+pc, m]);
Ds = fft(Xs(pc+1:pc+nFFT,:));

rxsymbols = pskdemod(Ds,M);

% Affichage constellation
k = 6;
figure(12);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['avec préfixe cyclique : Constellation de la sous-porteuse k = ' num2str(k)]);

k = 15;
figure(13);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['avec préfixe cyclique : Constellation de la sous-porteuse k = ' num2str(k)]);


% Vérification des erreurs
nb_diff = sum(txsymbols(:) ~= rxsymbols(:));

TEB = nb_diff/ numel(txsymbols);
disp(['TEB pour une chaine avec canal de propagation et avec préfixe cyclique : ' num2str(TEB)]);

%% III.4. Implantation avec préfixe cyclique et égalisation

Xc = reshape(Xc, [nFFT+pc, m]);
Xc0 = Xc(pc+1:pc+nFFT, :);

Ds = fft(Xc0);
Ds = Ds ./ H;              % ZE
N0 = 0.00001;                             % Variance du bruit 
Hc = conj(H);                             % Conjugué


%Ds = Hc.* Ds;     % ML
% Démodulation
rxsymbols = pskdemod(Ds, M);

% Affichage constellation
k = 6;
figure(14);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['avec préfixe cyclique et égalisation : Constellation de la sous-porteuse k = ' num2str(k)]);

k = 15;
figure(15);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['avec préfixe cyclique et égalisation : Constellation de la sous-porteuse k = ' num2str(k)]);


% Vérification des erreurs
nb_diff = sum(txsymbols(:) ~= rxsymbols(:));

TEB = nb_diff/ numel(txsymbols);
disp(['TEB pour une chaine avec canal de propagation, avec préfixe cyclique et égalisation : ' num2str(TEB)]);

%% IV Impact d'une erreur de synchronisation horloge
%% cas 1 :
Xc1 = Xc(2:1+nFFT, :);           
Ds = fft(Xc1);
%Ds = Ds ./ H;              % ZE
N0 = 0.00001;                             % Variance du bruit 
Hc = conj(H);                             % Conjugué
den = (abs(H).^2 + N0);

Ds = (Hc ./ den) .* Ds;     % MMSE 
% Démodulation
rxsymbols = pskdemod(Ds, M);

% Affichage constellation
k = 6;
figure(16);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['Cas 1 : Constellation de la sous-porteuse k = ' num2str(k)]);

k = 15;
figure(17);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['Cas 1 : Constellation de la sous-porteuse k = ' num2str(k)]);


% Vérification des erreurs
nb_diff = sum(txsymbols(:) ~= rxsymbols(:));

TEB = nb_diff/ numel(txsymbols);
disp(['TEB cas 1 : ' num2str(TEB)]);
%% cas 2 :
Xc2 = Xc(pc-5+1:pc-5+nFFT, :);   
Ds = fft(Xc2);
%Ds = Ds ./ H;              % ZE
N0 = 0.00001;                             % Variance du bruit 
Hc = conj(H);                             % Conjugué
den = (abs(H).^2 + N0);

Ds = (Hc ./ den) .* Ds;     % MMSE 
% Démodulation
rxsymbols = pskdemod(Ds, M);

% Affichage constellation
k = 6;
figure(18);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['Cas 2 : Constellation de la sous-porteuse k = ' num2str(k)]);

k = 15;
figure(19);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['Cas 2 : Constellation de la sous-porteuse k = ' num2str(k)]);

% Vérification des erreurs
nb_diff = sum(txsymbols(:) ~= rxsymbols(:));

TEB = nb_diff/ numel(txsymbols);
disp(['TEB cas 2 : ' num2str(TEB)]);
%% cas 3 :
Xc3 = [Xc(pc+nFFT-6:pc+nFFT, :);Xc(1:nFFT-7, :)]; 
Ds = fft(Xc3);
%Ds = Ds ./ H;              % ZE
N0 = 0.00001;                             % Variance du bruit 
Hc = conj(H);                             % Conjugué
den = (abs(H).^2 + N0);

Ds = (Hc ./ den) .* Ds;     % MMSE 
% Démodulation
rxsymbols = pskdemod(Ds, M);

% Affichage constellation
k = 6;
figure(20);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['Cas 3 : Constellation de la sous-porteuse k = ' num2str(k)]);

k = 15;
figure(21);
plot(real(Ds(k,:)), imag(Ds(k,:)), '+');
grid on;
axis equal;
xlim([-2 2]);
ylim([-2 2]);
xlabel('Partie réelle');
ylabel('Partie imaginaire');
title(['Cas 3 : Constellation de la sous-porteuse k = ' num2str(k)]);

% Vérification des erreurs
nb_diff = sum(txsymbols(:) ~= rxsymbols(:));

TEB = nb_diff/ numel(txsymbols);
disp(['TEB cas 3 : ' num2str(TEB)]);
