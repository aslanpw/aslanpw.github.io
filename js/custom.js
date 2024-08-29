(function () {
    // Camada de Mapeamentos - Condições para Aplicação da cor do pelo
    const data = {
        MapCores: [
            { ID: 1, Cor: "Alazão (Sorrel)", A: "A3", E: "E1", CPrl: "CPrl1", Z: "Z3", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 2, Cor: "Castanho", A: "A2", E: "E2", CPrl: "CPrl1", Z: "Z1", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 3, Cor: "Preto", A: "A1", E: "E2", CPrl: "CPrl1", Z: "Z1", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 4, Cor: "Palomino", A: "A3", E: "E1", CPrl: "CPrl2", Z: "Z3", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 5, Cor: "Baio", A: "A2", E: "E2", CPrl: "CPrl2", Z: "Z1", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 6, Cor: "Preto Esfumado", A: "A1", E: "E2", CPrl: "CPrl2", Z: "Z1", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 7, Cor: "Cremello", A: "A3", E: "E1", CPrl: "CPrl3", Z: "Z3", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 8, Cor: "Perlino", A: "A2", E: "E2", CPrl: "CPrl3", Z: "Z1", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 9, Cor: "Creme Esfumado", A: "A1", E: "E2", CPrl: "CPrl3", Z: "Z1", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 10, Cor: "Castanho Prateado", A: "A2", E: "E2", CPrl: "CPrl1", Z: "Z2", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 11, Cor: "Negro Prateado (Silver Dapple)", A: "A1", E: "E2", CPrl: "CPrl1", Z: "Z2", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 12, Cor: "Baio Prateado", A: "A2", E: "E2", CPrl: "CPrl2", Z: "Z2", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 13, Cor: "Preto Esfumado Prateado", A: "A1", E: "E2", CPrl: "CPrl2", Z: "Z2", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 14, Cor: "Perlino Prateado", A: "A2", E: "E2", CPrl: "CPrl3", Z: "Z2", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 15, Cor: "Creme Esfumado Prateado", A: "A1", E: "E2", CPrl: "CPrl3", Z: "Z2", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 16, Cor: "Alazão Dun", A: "A3", E: "E1", CPrl: "CPrl1", Z: "Z3", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 17, Cor: "Castanho Dun (Zebra Dun)", A: "A2", E: "E2", CPrl: "CPrl1", Z: "Z1", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 18, Cor: "Lobuno (Preto Dun)", A: "A1", E: "E2", CPrl: "CPrl1", Z: "Z1", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 19, Cor: "Dunalino (Palomino Dun)", A: "A3", E: "E1", CPrl: "CPrl2", Z: "Z3", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 20, Cor: "Dunskin (Baio Dun)", A: "A2", E: "E2", CPrl: "CPrl2", Z: "Z1", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 21, Cor: "Lobuno Esfumado", A: "A1", E: "E2", CPrl: "CPrl2", Z: "Z1", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 22, Cor: "Cremello Dun", A: "A3", E: "E1", CPrl: "CPrl3", Z: "Z3", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 23, Cor: "Perlino Dun", A: "A2", E: "E2", CPrl: "CPrl3", Z: "Z1", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 24, Cor: "Creme Dun Esfumado", A: "A1", E: "E2", CPrl: "CPrl3", Z: "Z1", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 25, Cor: "Rosilho de Alazão", A: "A3", E: "E1", CPrl: "CPrl1", Z: "Z3", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 26, Cor: "Rosilho de Castanho", A: "A2", E: "E2", CPrl: "CPrl1", Z: "Z1", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 27, Cor: "Rosilho Negro", A: "A1", E: "E2", CPrl: "CPrl1", Z: "Z1", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 28, Cor: "Rosilho de Palomino", A: "A3", E: "E1", CPrl: "CPrl2", Z: "Z3", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 29, Cor: "Rosilho de Baio", A: "A2", E: "E2", CPrl: "CPrl2", Z: "Z1", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 30, Cor: "Rosilho de Preto Esfumado", A: "A1", E: "E2", CPrl: "CPrl2", Z: "Z1", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 31, Cor: "Rosilho de Castanho Prateado", A: "A2", E: "E2", CPrl: "CPrl1", Z: "Z2", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 32, Cor: "Rosilho de Negro Prateado", A: "A1", E: "E2", CPrl: "CPrl1", Z: "Z2", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 33, Cor: "Rosilho de Alazão Dun", A: "A3", E: "E1", CPrl: "CPrl1", Z: "Z3", D: "D2", R: "R2", Ch: "Ch1" },
            { ID: 34, Cor: "Rosilho de Castanho Dun", A: "A2", E: "E2", CPrl: "CPrl1", Z: "Z1", D: "D2", R: "R2", Ch: "Ch1" },
            { ID: 35, Cor: "Rosilho de Lobuno", A: "A1", E: "E2", CPrl: "CPrl1", Z: "Z1", D: "D2", R: "R2", Ch: "Ch1" },
            { ID: 36, Cor: "Rosilho Dunalino", A: "A3", E: "E1", CPrl: "CPrl2", Z: "Z3", D: "D2", R: "R2", Ch: "Ch1" },
            { ID: 37, Cor: "Rosilho Dunskin", A: "A2", E: "E2", CPrl: "CPrl2", Z: "Z1", D: "D2", R: "R2", Ch: "Ch1" },
            { ID: 38, Cor: "Rosilho de Lobuno Esfumado", A: "A1", E: "E2", CPrl: "CPrl2", Z: "Z1", D: "D2", R: "R2", Ch: "Ch1" },
            { ID: 39, Cor: "Castanho Dun Prateado", A: "A2", E: "E2", CPrl: "CPrl1", Z: "Z2", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 40, Cor: "Lobuno Prateado (Negro Dun Prateado)", A: "A1", E: "E2", CPrl: "CPrl1", Z: "Z2", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 41, Cor: "Champagne Marfim", A: "A3", E: "E1", CPrl: "CPrl1", Z: "Z3", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 42, Cor: "Champagne Âmbar", A: "A2", E: "E2", CPrl: "CPrl1", Z: "Z1", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 43, Cor: "Champagne Clássico", A: "A1", E: "E2", CPrl: "CPrl1", Z: "Z1", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 44, Cor: "Champagne Marfim Creme", A: "A3", E: "E1", CPrl: "CPrl2", Z: "Z3", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 45, Cor: "Champagne Âmbar Creme", A: "A2", E: "E2", CPrl: "CPrl2", Z: "Z1", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 46, Cor: "Champagne Clássico Creme", A: "A1", E: "E2", CPrl: "CPrl2", Z: "Z1", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 47, Cor: "Champagne Marfim Dun", A: "A3", E: "E1", CPrl: "CPrl1", Z: "Z3", D: "D2", R: "R1", Ch: "Ch2" },
            { ID: 48, Cor: "Champagne Âmbar Dun", A: "A2", E: "E2", CPrl: "CPrl1", Z: "Z1", D: "D2", R: "R1", Ch: "Ch2" },
            { ID: 49, Cor: "Champagne Clássico Dun", A: "A1", E: "E2", CPrl: "CPrl1", Z: "Z1", D: "D2", R: "R1", Ch: "Ch2" },
            { ID: 50, Cor: "Champagne Marfim Creme Dun", A: "A3", E: "E1", CPrl: "CPrl2", Z: "Z3", D: "D2", R: "R1", Ch: "Ch2" },
            { ID: 51, Cor: "Champagne Âmbar Creme Dun", A: "A2", E: "E2", CPrl: "CPrl2", Z: "Z1", D: "D2", R: "R1", Ch: "Ch2" },
            { ID: 52, Cor: "Champagne Clássico Creme Dun", A: "A1", E: "E2", CPrl: "CPrl2", Z: "Z1", D: "D2", R: "R1", Ch: "Ch2" },
            { ID: 53, Cor: "Champagne Âmbar Prateado", A: "A2", E: "E2", CPrl: "CPrl1", Z: "Z2", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 54, Cor: "Champagne Clássico Prateado", A: "A1", E: "E2", CPrl: "CPrl1", Z: "Z2", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 55, Cor: "Champagne Âmbar Creme Prateado", A: "A2", E: "E2", CPrl: "CPrl2", Z: "Z2", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 56, Cor: "Champagne Clássico Creme Prateado", A: "A1", E: "E2", CPrl: "CPrl2", Z: "Z2", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 57, Cor: "Alazão Pérola", A: "A3", E: "E1", CPrl: "CPrl4", Z: "Z3", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 58, Cor: "Castanho Pérola", A: "A2", E: "E2", CPrl: "CPrl4", Z: "Z1", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 59, Cor: "Negro Pérola", A: "A1", E: "E2", CPrl: "CPrl4", Z: "Z1", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 60, Cor: "Palomino Pérola", A: "A3", E: "E1", CPrl: "CPrl5", Z: "Z3", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 61, Cor: "Baio Pérola", A: "A2", E: "E2", CPrl: "CPrl5", Z: "Z1", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 62, Cor: "Preto Esfumado Pérola", A: "A1", E: "E2", CPrl: "CPrl5", Z: "Z1", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 63, Cor: "Ouro Pérola", A: "A3", E: "E1", CPrl: "CPrl6", Z: "Z3", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 64, Cor: "Âmbar Pérola", A: "A2", E: "E2", CPrl: "CPrl6", Z: "Z1", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 65, Cor: "Pérola Clássico", A: "A1", E: "E2", CPrl: "CPrl6", Z: "Z1", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 66, Cor: "Castanho Pérola Prateado", A: "A2", E: "E2", CPrl: "CPrl4", Z: "Z2", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 67, Cor: "Negro Pérola Prateado (Silver Dapple)", A: "A1", E: "E2", CPrl: "CPrl4", Z: "Z2", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 68, Cor: "Baio Pérola Prateado", A: "A2", E: "E2", CPrl: "CPrl5", Z: "Z2", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 69, Cor: "Preto Esfumado Pérola Prateado", A: "A1", E: "E2", CPrl: "CPrl5", Z: "Z2", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 70, Cor: "Âmbar Pérola Prateado", A: "A2", E: "E2", CPrl: "CPrl6", Z: "Z2", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 71, Cor: "Pérola Clássico Prateado", A: "A1", E: "E2", CPrl: "CPrl6", Z: "Z2", D: "D1", R: "R1", Ch: "Ch1" },
            { ID: 72, Cor: "Alazão Pérola Dun", A: "A3", E: "E1", CPrl: "CPrl4", Z: "Z3", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 73, Cor: "Castanho Pérola Dun", A: "A2", E: "E2", CPrl: "CPrl4", Z: "Z1", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 74, Cor: "Lobuno Pérola", A: "A1", E: "E2", CPrl: "CPrl4", Z: "Z1", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 75, Cor: "Dunalino Pérola", A: "A3", E: "E1", CPrl: "CPrl5", Z: "Z3", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 76, Cor: "Dunskin Pérola", A: "A2", E: "E2", CPrl: "CPrl5", Z: "Z1", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 77, Cor: "Lobuno Esfumado Pérola", A: "A1", E: "E2", CPrl: "CPrl5", Z: "Z1", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 78, Cor: "Ouro Pérola Dun", A: "A3", E: "E1", CPrl: "CPrl6", Z: "Z3", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 79, Cor: "Âmbar Pérola Dun", A: "A2", E: "E2", CPrl: "CPrl6", Z: "Z1", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 80, Cor: "Pérola Clássico Dun", A: "A1", E: "E2", CPrl: "CPrl6", Z: "Z1", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 81, Cor: "Rosilho de Alazão Pérola", A: "A3", E: "E1", CPrl: "CPrl4", Z: "Z3", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 82, Cor: "Rosilho de Castanho Pérola", A: "A2", E: "E2", CPrl: "CPrl4", Z: "Z1", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 83, Cor: "Rosilho de Negro Pérola", A: "A1", E: "E2", CPrl: "CPrl4", Z: "Z1", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 84, Cor: "Rosilho de Palomino Pérola", A: "A3", E: "E1", CPrl: "CPrl5", Z: "Z3", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 85, Cor: "Rosilho de Baio Pérola", A: "A2", E: "E2", CPrl: "CPrl5", Z: "Z1", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 86, Cor: "Rosilho de Preto Esfumado Pérola", A: "A1", E: "E2", CPrl: "CPrl5", Z: "Z1", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 87, Cor: "Rosilho de Castanho Pérola Prateado", A: "A2", E: "E2", CPrl: "CPrl4", Z: "Z2", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 88, Cor: "Rosilho de Negro Pérola Prateado", A: "A1", E: "E2", CPrl: "CPrl4", Z: "Z2", D: "D1", R: "R2", Ch: "Ch1" },
            { ID: 89, Cor: "Rosilho de Alazão Pérola Dun", A: "A3", E: "E1", CPrl: "CPrl4", Z: "Z3", D: "D2", R: "R2", Ch: "Ch1" },
            { ID: 90, Cor: "Rosilho de Castanho Pérola Dun", A: "A2", E: "E2", CPrl: "CPrl4", Z: "Z1", D: "D2", R: "R2", Ch: "Ch1" },
            { ID: 91, Cor: "Rosilho de Lobuno Pérola", A: "A1", E: "E2", CPrl: "CPrl4", Z: "Z1", D: "D2", R: "R2", Ch: "Ch1" },
            { ID: 92, Cor: "Rosilho Dunalino Pérola", A: "A3", E: "E1", CPrl: "CPrl5", Z: "Z3", D: "D2", R: "R2", Ch: "Ch1" },
            { ID: 93, Cor: "Rosilho Dunskin Pérola", A: "A2", E: "E2", CPrl: "CPrl5", Z: "Z1", D: "D2", R: "R2", Ch: "Ch1" },
            { ID: 94, Cor: "Rosilho de Lobuno Pérola Esfumado", A: "A1", E: "E2", CPrl: "CPrl5", Z: "Z1", D: "D2", R: "R2", Ch: "Ch1" },
            { ID: 95, Cor: "Castanho Pérola Dun Prateado", A: "A2", E: "E2", CPrl: "CPrl4", Z: "Z2", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 96, Cor: "Lobuno Pérola Prateado", A: "A1", E: "E2", CPrl: "CPrl4", Z: "Z2", D: "D2", R: "R1", Ch: "Ch1" },
            { ID: 97, Cor: "Champagne Ouro Pérola", A: "A3", E: "E1", CPrl: "CPrl4", Z: "Z3", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 98, Cor: "Champagne Âmbar Pérola", A: "A2", E: "E2", CPrl: "CPrl4", Z: "Z1", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 99, Cor: "Champagne Clássico Pérola", A: "A1", E: "E2", CPrl: "CPrl4", Z: "Z1", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 100, Cor: "Champagne Ouro Pérola Creme", A: "A3", E: "E1", CPrl: "CPrl5", Z: "Z3", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 101, Cor: "Champagne Âmbar Pérola Creme", A: "A2", E: "E2", CPrl: "CPrl5", Z: "Z1", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 102, Cor: "Champagne Clássico Pérola Creme", A: "A1", E: "E2", CPrl: "CPrl5", Z: "Z1", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 103, Cor: "Champagne Ouro Pérola Dun", A: "A3", E: "E1", CPrl: "CPrl4", Z: "Z3", D: "D2", R: "R1", Ch: "Ch2" },
            { ID: 104, Cor: "Champagne Âmbar Pérola Dun", A: "A2", E: "E2", CPrl: "CPrl4", Z: "Z1", D: "D2", R: "R1", Ch: "Ch2" },
            { ID: 105, Cor: "Champagne Clássico Pérola Dun", A: "A1", E: "E2", CPrl: "CPrl4", Z: "Z1", D: "D2", R: "R1", Ch: "Ch2" },
            { ID: 106, Cor: "Champagne Ouro Pérola Creme Dun", A: "A3", E: "E1", CPrl: "CPrl5", Z: "Z3", D: "D2", R: "R1", Ch: "Ch2" },
            { ID: 107, Cor: "Champagne Âmbar Pérola Creme Dun", A: "A2", E: "E2", CPrl: "CPrl5", Z: "Z1", D: "D2", R: "R1", Ch: "Ch2" },
            { ID: 108, Cor: "Champagne Clássico Pérola Creme Dun", A: "A1", E: "E2", CPrl: "CPrl5", Z: "Z1", D: "D2", R: "R1", Ch: "Ch2" },
            { ID: 109, Cor: "Champagne Âmbar Pérola Prateado", A: "A2", E: "E2", CPrl: "CPrl4", Z: "Z2", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 110, Cor: "Champagne Clássico Pérola Prateado", A: "A1", E: "E2", CPrl: "CPrl4", Z: "Z2", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 111, Cor: "Champagne Âmbar Pérola Creme Prateado", A: "A2", E: "E2", CPrl: "CPrl5", Z: "Z2", D: "D1", R: "R1", Ch: "Ch2" },
            { ID: 112, Cor: "Champagne Clássico Pérola Creme Prateado", A: "A1", E: "E2", CPrl: "CPrl5", Z: "Z2", D: "D1", R: "R1", Ch: "Ch2" },
        ],
        MapPadrao: [ // Camada de Mapeamentos - Condições para Aplicação do Padrão
            { ID: 1, Padrao: "Appaloosa", T: "N", O: "N", S: "N", Sh: "N", Lp: "Lp2", PATN1: "PATN12" },
            { ID: 2, Padrao: "Frame Overo", T: "N", O: "O2", S: "N", Sh: "N", Lp: "N", PATN1: "N" },
            { ID: 3, Padrao: "Sabino", T: "N", O: "N", S: "S2", Sh: "N", Lp: "N", PATN1: "N" },
            { ID: 4, Padrao: "Splash", T: "N", O: "N", S: "N", Sh: "Sh2", Lp: "N", PATN1: "N" },
            { ID: 5, Padrao: "Tobiano", T: "T2", O: "N", S: "N", Sh: "N", Lp: "N", PATN1: "N" },
            { ID: 6, Padrao: "Frame Overo | Sabino", T: "N", O: "O2", S: "S2", Sh: "N", Lp: "N", PATN1: "N" },
            { ID: 7, Padrao: "Tobiano | Frame Overo", T: "T2", O: "O2", S: "N", Sh: "N", Lp: "N", PATN1: "N" },
            { ID: 8, Padrao: "Tobiano | Sabino", T: "T2", O: "N", S: "S2", Sh: "N", Lp: "N", PATN1: "N" },
            { ID: 9, Padrao: "Tobiano | Splash", T: "T2", O: "N", S: "N", Sh: "Sh2", Lp: "N", PATN1: "N" },
            { ID: 10, Padrao: "Frame Overo | Splash", T: "N", O: "O2", S: "N", Sh: "Sh2", Lp: "N", PATN1: "N" },
            { ID: 11, Padrao: "Sabino | Splash", T: "N", O: "N", S: "S2", Sh: "Sh2", Lp: "N", PATN1: "N" },
            { ID: 12, Padrao: "Tobiano | Frame Overo | Sabino", T: "T2", O: "O2", S: "S2", Sh: "N", Lp: "N", PATN1: "N" },
            { ID: 13, Padrao: "Tobiano | Frame Overo | Splash", T: "T2", O: "O2", S: "N", Sh: "Sh2", Lp: "N", PATN1: "N" },
            { ID: 14, Padrao: "Tobiano | Sabino | Splash", T: "T2", O: "N", S: "S2", Sh: "Sh2", Lp: "N", PATN1: "N" },
            { ID: 15, Padrao: "Frame Overo | Sabino | Splash", T: "N", O: "O2", S: "S2", Sh: "Sh2", Lp: "N", PATN1: "N" },
        ],
        EA: [
            { EPai: "E1", APai: "A1", EMae: "E1", AMae: "A1", E1: 1, E2: 0, E3: 0, A1: 1, A2: 0, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "E1", AMae: "A1", E1: 0.5, E2: 0.5, E3: 0, A1: 1, A2: 0, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "E1", AMae: "A1", E1: 0, E2: 1, E3: 0, A1: 1, A2: 0, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "E1", AMae: "A1", E1: 0.25, E2: 0.75, E3: 0, A1: 1, A2: 0, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "E1", AMae: "A1", E1: 1, E2: 0, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "A2", EMae: "E1", AMae: "A1", E1: 0.5, E2: 0.5, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E3", APai: "A2", EMae: "E1", AMae: "A1", E1: 0, E2: 1, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "EU", APai: "A2", EMae: "E1", AMae: "A1", E1: 0.25, E2: 0.75, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E1", APai: "A3", EMae: "E1", AMae: "A1", E1: 1, E2: 0, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "E2", APai: "A3", EMae: "E1", AMae: "A1", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "E3", APai: "A3", EMae: "E1", AMae: "A1", E1: 0, E2: 1, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "EU", APai: "A3", EMae: "E1", AMae: "A1", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "E1", APai: "AU", EMae: "E1", AMae: "A1", E1: 1, E2: 0, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "AU", EMae: "E1", AMae: "A1", E1: 0.5, E2: 0.5, E3: 0, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E3", APai: "AU", EMae: "E1", AMae: "A1", E1: 0, E2: 1, E3: 0, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "EU", APai: "AU", EMae: "E1", AMae: "A1", E1: 0.25, E2: 0.75, E3: 0, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E1", APai: "A1", EMae: "E2", AMae: "A1", E1: 0.5, E2: 0.5, E3: 0, A1: 1, A2: 0, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "E2", AMae: "A1", E1: 0.25, E2: 0.5, E3: 0.25, A1: 1, A2: 0, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "E2", AMae: "A1", E1: 0, E2: 0.5, E3: 0.5, A1: 1, A2: 0, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "E2", AMae: "A1", E1: 0.125, E2: 0.5, E3: 0.375, A1: 1, A2: 0, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "E2", AMae: "A1", E1: 0.5, E2: 0.5, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "A2", EMae: "E2", AMae: "A1", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E3", APai: "A2", EMae: "E2", AMae: "A1", E1: 0, E2: 0.5, E3: 0.5, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "EU", APai: "A2", EMae: "E2", AMae: "A1", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E1", APai: "A3", EMae: "E2", AMae: "A1", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "E2", APai: "A3", EMae: "E2", AMae: "A1", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0, A2: 1, A3: 0 },
            { EPai: "E3", APai: "A3", EMae: "E2", AMae: "A1", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 1, A3: 0 },
            { EPai: "EU", APai: "A3", EMae: "E2", AMae: "A1", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 1, A3: 0 },
            { EPai: "E1", APai: "AU", EMae: "E2", AMae: "A1", E1: 0.5, E2: 0.5, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "AU", EMae: "E2", AMae: "A1", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E3", APai: "AU", EMae: "E2", AMae: "A1", E1: 0, E2: 0.5, E3: 0.5, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "EU", APai: "AU", EMae: "E2", AMae: "A1", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E1", APai: "A1", EMae: "E3", AMae: "A1", E1: 0, E2: 1, E3: 0, A1: 1, A2: 0, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "E3", AMae: "A1", E1: 0, E2: 0.5, E3: 0.5, A1: 1, A2: 0, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "E3", AMae: "A1", E1: 0, E2: 0, E3: 1, A1: 1, A2: 0, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "E3", AMae: "A1", E1: 0, E2: 0.25, E3: 0.75, A1: 1, A2: 0, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "E3", AMae: "A1", E1: 0, E2: 1, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "A2", EMae: "E3", AMae: "A1", E1: 0, E2: 0.5, E3: 0.5, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E3", APai: "A2", EMae: "E3", AMae: "A1", E1: 0, E2: 0, E3: 1, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "EU", APai: "A2", EMae: "E3", AMae: "A1", E1: 0, E2: 0.25, E3: 0.75, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E1", APai: "A3", EMae: "E3", AMae: "A1", E1: 0, E2: 1, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "E2", APai: "A3", EMae: "E3", AMae: "A1", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 1, A3: 0 },
            { EPai: "E3", APai: "A3", EMae: "E3", AMae: "A1", E1: 0, E2: 0, E3: 1, A1: 0, A2: 1, A3: 0 },
            { EPai: "EU", APai: "A3", EMae: "E3", AMae: "A1", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 1, A3: 0 },
            { EPai: "E1", APai: "AU", EMae: "E3", AMae: "A1", E1: 0, E2: 1, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "AU", EMae: "E3", AMae: "A1", E1: 0, E2: 0.5, E3: 0.5, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E3", APai: "AU", EMae: "E3", AMae: "A1", E1: 0, E2: 0, E3: 1, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "EU", APai: "AU", EMae: "E3", AMae: "A1", E1: 0, E2: 0.25, E3: 0.75, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E1", APai: "A1", EMae: "EU", AMae: "A1", E1: 0.25, E2: 0.75, E3: 0, A1: 1, A2: 0, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "EU", AMae: "A1", E1: 0.125, E2: 0.5, E3: 0.375, A1: 1, A2: 0, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "EU", AMae: "A1", E1: 0, E2: 0.25, E3: 0.75, A1: 1, A2: 0, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "EU", AMae: "A1", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 1, A2: 0, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "EU", AMae: "A1", E1: 0.25, E2: 0.75, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "A2", EMae: "EU", AMae: "A1", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E3", APai: "A2", EMae: "EU", AMae: "A1", E1: 0, E2: 0.25, E3: 0.75, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "EU", APai: "A2", EMae: "EU", AMae: "A1", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E1", APai: "A3", EMae: "EU", AMae: "A1", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "E2", APai: "A3", EMae: "EU", AMae: "A1", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 1, A3: 0 },
            { EPai: "E3", APai: "A3", EMae: "EU", AMae: "A1", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 1, A3: 0 },
            { EPai: "EU", APai: "A3", EMae: "EU", AMae: "A1", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0, A2: 1, A3: 0 },
            { EPai: "E1", APai: "AU", EMae: "EU", AMae: "A1", E1: 0.25, E2: 0.75, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "AU", EMae: "EU", AMae: "A1", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E3", APai: "AU", EMae: "EU", AMae: "A1", E1: 0, E2: 0.25, E3: 0.75, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "EU", APai: "AU", EMae: "EU", AMae: "A1", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E1", APai: "A1", EMae: "E1", AMae: "A2", E1: 1, E2: 0, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "E1", AMae: "A2", E1: 0.5, E2: 0.5, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "E1", AMae: "A2", E1: 0, E2: 1, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "E1", AMae: "A2", E1: 0.25, E2: 0.75, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "E1", AMae: "A2", E1: 1, E2: 0, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E2", APai: "A2", EMae: "E1", AMae: "A2", E1: 0.5, E2: 0.5, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E3", APai: "A2", EMae: "E1", AMae: "A2", E1: 0, E2: 1, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "EU", APai: "A2", EMae: "E1", AMae: "A2", E1: 0.25, E2: 0.75, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E1", APai: "A3", EMae: "E1", AMae: "A2", E1: 1, E2: 0, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "A3", EMae: "E1", AMae: "A2", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E3", APai: "A3", EMae: "E1", AMae: "A2", E1: 0, E2: 1, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "EU", APai: "A3", EMae: "E1", AMae: "A2", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E1", APai: "AU", EMae: "E1", AMae: "A2", E1: 1, E2: 0, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E2", APai: "AU", EMae: "E1", AMae: "A2", E1: 0.5, E2: 0.5, E3: 0, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E3", APai: "AU", EMae: "E1", AMae: "A2", E1: 0, E2: 1, E3: 0, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "EU", APai: "AU", EMae: "E1", AMae: "A2", E1: 0.25, E2: 0.75, E3: 0, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E1", APai: "A1", EMae: "E2", AMae: "A2", E1: 0.5, E2: 0.5, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "E2", AMae: "A2", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "E2", AMae: "A2", E1: 0, E2: 0.5, E3: 0.5, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "E2", AMae: "A2", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "E2", AMae: "A2", E1: 0.5, E2: 0.5, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E2", APai: "A2", EMae: "E2", AMae: "A2", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E3", APai: "A2", EMae: "E2", AMae: "A2", E1: 0, E2: 0.5, E3: 0.5, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "EU", APai: "A2", EMae: "E2", AMae: "A2", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E1", APai: "A3", EMae: "E2", AMae: "A2", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "A3", EMae: "E2", AMae: "A2", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E3", APai: "A3", EMae: "E2", AMae: "A2", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "EU", APai: "A3", EMae: "E2", AMae: "A2", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E1", APai: "AU", EMae: "E2", AMae: "A2", E1: 0.5, E2: 0.5, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E2", APai: "AU", EMae: "E2", AMae: "A2", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E3", APai: "AU", EMae: "E2", AMae: "A2", E1: 0, E2: 0.5, E3: 0.5, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "EU", APai: "AU", EMae: "E2", AMae: "A2", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E1", APai: "A1", EMae: "E3", AMae: "A2", E1: 0, E2: 1, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "E3", AMae: "A2", E1: 0, E2: 0.5, E3: 0.5, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "E3", AMae: "A2", E1: 0, E2: 0, E3: 1, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "E3", AMae: "A2", E1: 0, E2: 0.25, E3: 0.75, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "E3", AMae: "A2", E1: 0, E2: 1, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E2", APai: "A2", EMae: "E3", AMae: "A2", E1: 0, E2: 0.5, E3: 0.5, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E3", APai: "A2", EMae: "E3", AMae: "A2", E1: 0, E2: 0, E3: 1, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "EU", APai: "A2", EMae: "E3", AMae: "A2", E1: 0, E2: 0.25, E3: 0.75, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E1", APai: "A3", EMae: "E3", AMae: "A2", E1: 0, E2: 1, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "A3", EMae: "E3", AMae: "A2", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E3", APai: "A3", EMae: "E3", AMae: "A2", E1: 0, E2: 0, E3: 1, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "EU", APai: "A3", EMae: "E3", AMae: "A2", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E1", APai: "AU", EMae: "E3", AMae: "A2", E1: 0, E2: 1, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E2", APai: "AU", EMae: "E3", AMae: "A2", E1: 0, E2: 0.5, E3: 0.5, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E3", APai: "AU", EMae: "E3", AMae: "A2", E1: 0, E2: 0, E3: 1, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "EU", APai: "AU", EMae: "E3", AMae: "A2", E1: 0, E2: 0.25, E3: 0.75, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E1", APai: "A1", EMae: "EU", AMae: "A2", E1: 0.25, E2: 0.75, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "EU", AMae: "A2", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "EU", AMae: "A2", E1: 0, E2: 0.25, E3: 0.75, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "EU", AMae: "A2", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "EU", AMae: "A2", E1: 0.25, E2: 0.75, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E2", APai: "A2", EMae: "EU", AMae: "A2", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E3", APai: "A2", EMae: "EU", AMae: "A2", E1: 0, E2: 0.25, E3: 0.75, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "EU", APai: "A2", EMae: "EU", AMae: "A2", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E1", APai: "A3", EMae: "EU", AMae: "A2", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "A3", EMae: "EU", AMae: "A2", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E3", APai: "A3", EMae: "EU", AMae: "A2", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "EU", APai: "A3", EMae: "EU", AMae: "A2", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E1", APai: "AU", EMae: "EU", AMae: "A2", E1: 0.25, E2: 0.75, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E2", APai: "AU", EMae: "EU", AMae: "A2", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E3", APai: "AU", EMae: "EU", AMae: "A2", E1: 0, E2: 0.25, E3: 0.75, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "EU", APai: "AU", EMae: "EU", AMae: "A2", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E1", APai: "A1", EMae: "E1", AMae: "A3", E1: 1, E2: 0, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "E1", AMae: "A3", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "E1", AMae: "A3", E1: 0, E2: 1, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "E1", AMae: "A3", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "E1", AMae: "A3", E1: 1, E2: 0, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "A2", EMae: "E1", AMae: "A3", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E3", APai: "A2", EMae: "E1", AMae: "A3", E1: 0, E2: 1, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "EU", APai: "A2", EMae: "E1", AMae: "A3", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E1", APai: "A3", EMae: "E1", AMae: "A3", E1: 1, E2: 0, E3: 0, A1: 0, A2: 0, A3: 1 },
            { EPai: "E2", APai: "A3", EMae: "E1", AMae: "A3", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 0, A3: 1 },
            { EPai: "E3", APai: "A3", EMae: "E1", AMae: "A3", E1: 0, E2: 1, E3: 0, A1: 0, A2: 0, A3: 1 },
            { EPai: "EU", APai: "A3", EMae: "E1", AMae: "A3", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 0, A3: 1 },
            { EPai: "E1", APai: "AU", EMae: "E1", AMae: "A3", E1: 1, E2: 0, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "AU", EMae: "E1", AMae: "A3", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 0.25, A3: 0.75 },
            { EPai: "E3", APai: "AU", EMae: "E1", AMae: "A3", E1: 0, E2: 1, E3: 0, A1: 0, A2: 0.25, A3: 0.75 },
            { EPai: "EU", APai: "AU", EMae: "E1", AMae: "A3", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 0.25, A3: 0.75 },
            { EPai: "E1", APai: "A1", EMae: "E2", AMae: "A3", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "E2", AMae: "A3", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0, A2: 1, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "E2", AMae: "A3", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 1, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "E2", AMae: "A3", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 1, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "E2", AMae: "A3", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "A2", EMae: "E2", AMae: "A3", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E3", APai: "A2", EMae: "E2", AMae: "A3", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "EU", APai: "A2", EMae: "E2", AMae: "A3", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E1", APai: "A3", EMae: "E2", AMae: "A3", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 0, A3: 1 },
            { EPai: "E2", APai: "A3", EMae: "E2", AMae: "A3", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0, A2: 0, A3: 1 },
            { EPai: "E3", APai: "A3", EMae: "E2", AMae: "A3", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 0, A3: 1 },
            { EPai: "EU", APai: "A3", EMae: "E2", AMae: "A3", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 0, A3: 1 },
            { EPai: "E1", APai: "AU", EMae: "E2", AMae: "A3", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "AU", EMae: "E2", AMae: "A3", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0, A2: 0.25, A3: 0.75 },
            { EPai: "E3", APai: "AU", EMae: "E2", AMae: "A3", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 0.25, A3: 0.75 },
            { EPai: "EU", APai: "AU", EMae: "E2", AMae: "A3", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 0.25, A3: 0.75 },
            { EPai: "E1", APai: "A1", EMae: "E3", AMae: "A3", E1: 0, E2: 1, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "E3", AMae: "A3", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 1, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "E3", AMae: "A3", E1: 0, E2: 0, E3: 1, A1: 0, A2: 1, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "E3", AMae: "A3", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 1, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "E3", AMae: "A3", E1: 0, E2: 1, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "A2", EMae: "E3", AMae: "A3", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E3", APai: "A2", EMae: "E3", AMae: "A3", E1: 0, E2: 0, E3: 1, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "EU", APai: "A2", EMae: "E3", AMae: "A3", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E1", APai: "A3", EMae: "E3", AMae: "A3", E1: 0, E2: 1, E3: 0, A1: 0, A2: 0, A3: 1 },
            { EPai: "E2", APai: "A3", EMae: "E3", AMae: "A3", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 0, A3: 1 },
            { EPai: "E3", APai: "A3", EMae: "E3", AMae: "A3", E1: 0, E2: 0, E3: 1, A1: 0, A2: 0, A3: 1 },
            { EPai: "EU", APai: "A3", EMae: "E3", AMae: "A3", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 0, A3: 1 },
            { EPai: "E1", APai: "AU", EMae: "E3", AMae: "A3", E1: 0, E2: 1, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "AU", EMae: "E3", AMae: "A3", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 0.25, A3: 0.75 },
            { EPai: "E3", APai: "AU", EMae: "E3", AMae: "A3", E1: 0, E2: 0, E3: 1, A1: 0, A2: 0.25, A3: 0.75 },
            { EPai: "EU", APai: "AU", EMae: "E3", AMae: "A3", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 0.25, A3: 0.75 },
            { EPai: "E1", APai: "A1", EMae: "EU", AMae: "A3", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 1, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "EU", AMae: "A3", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 1, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "EU", AMae: "A3", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 1, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "EU", AMae: "A3", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0, A2: 1, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "EU", AMae: "A3", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "A2", EMae: "EU", AMae: "A3", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E3", APai: "A2", EMae: "EU", AMae: "A3", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "EU", APai: "A2", EMae: "EU", AMae: "A3", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E1", APai: "A3", EMae: "EU", AMae: "A3", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 0, A3: 1 },
            { EPai: "E2", APai: "A3", EMae: "EU", AMae: "A3", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 0, A3: 1 },
            { EPai: "E3", APai: "A3", EMae: "EU", AMae: "A3", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 0, A3: 1 },
            { EPai: "EU", APai: "A3", EMae: "EU", AMae: "A3", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0, A2: 0, A3: 1 },
            { EPai: "E1", APai: "AU", EMae: "EU", AMae: "A3", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "AU", EMae: "EU", AMae: "A3", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 0.25, A3: 0.75 },
            { EPai: "E3", APai: "AU", EMae: "EU", AMae: "A3", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 0.25, A3: 0.75 },
            { EPai: "EU", APai: "AU", EMae: "EU", AMae: "A3", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0, A2: 0.25, A3: 0.75 },
            { EPai: "E1", APai: "A1", EMae: "E1", AMae: "AU", E1: 1, E2: 0, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "E1", AMae: "AU", E1: 0.5, E2: 0.5, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "E1", AMae: "AU", E1: 0, E2: 1, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "E1", AMae: "AU", E1: 0.25, E2: 0.75, E3: 0, A1: 0.5, A2: 0.5, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "E1", AMae: "AU", E1: 1, E2: 0, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E2", APai: "A2", EMae: "E1", AMae: "AU", E1: 0.5, E2: 0.5, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E3", APai: "A2", EMae: "E1", AMae: "AU", E1: 0, E2: 1, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "EU", APai: "A2", EMae: "E1", AMae: "AU", E1: 0.25, E2: 0.75, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E1", APai: "A3", EMae: "E1", AMae: "AU", E1: 1, E2: 0, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E2", APai: "A3", EMae: "E1", AMae: "AU", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E3", APai: "A3", EMae: "E1", AMae: "AU", E1: 0, E2: 1, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "EU", APai: "A3", EMae: "E1", AMae: "AU", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 0.5, A3: 0.5 },
            { EPai: "E1", APai: "AU", EMae: "E1", AMae: "AU", E1: 1, E2: 0, E3: 0, A1: 0.25, A2: 0.5, A3: 0.25 },
            { EPai: "E2", APai: "AU", EMae: "E1", AMae: "AU", E1: 0.5, E2: 0.5, E3: 0, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E3", APai: "AU", EMae: "E1", AMae: "AU", E1: 0, E2: 1, E3: 0, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "EU", APai: "AU", EMae: "E1", AMae: "AU", E1: 0.25, E2: 0.75, E3: 0, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E1", APai: "A1", EMae: "E2", AMae: "AU", E1: 0.5, E2: 0.5, E3: 0, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "E2", AMae: "AU", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "E2", AMae: "AU", E1: 0, E2: 0.5, E3: 0.5, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "E2", AMae: "AU", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "E2", AMae: "AU", E1: 0.5, E2: 0.5, E3: 0, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E2", APai: "A2", EMae: "E2", AMae: "AU", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E3", APai: "A2", EMae: "E2", AMae: "AU", E1: 0, E2: 0.5, E3: 0.5, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "EU", APai: "A2", EMae: "E2", AMae: "AU", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E1", APai: "A3", EMae: "E2", AMae: "AU", E1: 0.5, E2: 0.5, E3: 0, A1: 0, A2: 0.75, A3: 0.25 },
            { EPai: "E2", APai: "A3", EMae: "E2", AMae: "AU", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0, A2: 0.75, A3: 0.25 },
            { EPai: "E3", APai: "A3", EMae: "E2", AMae: "AU", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 0.75, A3: 0.25 },
            { EPai: "EU", APai: "A3", EMae: "E2", AMae: "AU", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 0.75, A3: 0.25 },
            { EPai: "E1", APai: "AU", EMae: "E2", AMae: "AU", E1: 0.5, E2: 0.5, E3: 0, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E2", APai: "AU", EMae: "E2", AMae: "AU", E1: 0.25, E2: 0.5, E3: 0.25, A1: 0.0625, A2: 0.375, A3: 0.5625 },
            { EPai: "E3", APai: "AU", EMae: "E2", AMae: "AU", E1: 0, E2: 0.5, E3: 0.5, A1: 0.0625, A2: 0.375, A3: 0.5625 },
            { EPai: "EU", APai: "AU", EMae: "E2", AMae: "AU", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.0625, A2: 0.375, A3: 0.5625 },
            { EPai: "E1", APai: "A1", EMae: "E3", AMae: "AU", E1: 0, E2: 1, E3: 0, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "E3", AMae: "AU", E1: 0, E2: 0.5, E3: 0.5, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "E3", AMae: "AU", E1: 0, E2: 0, E3: 1, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "E3", AMae: "AU", E1: 0, E2: 0.25, E3: 0.75, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "E3", AMae: "AU", E1: 0, E2: 1, E3: 0, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E2", APai: "A2", EMae: "E3", AMae: "AU", E1: 0, E2: 0.5, E3: 0.5, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E3", APai: "A2", EMae: "E3", AMae: "AU", E1: 0, E2: 0, E3: 1, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "EU", APai: "A2", EMae: "E3", AMae: "AU", E1: 0, E2: 0.25, E3: 0.75, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E1", APai: "A3", EMae: "E3", AMae: "AU", E1: 0, E2: 1, E3: 0, A1: 0, A2: 0.75, A3: 0.25 },
            { EPai: "E2", APai: "A3", EMae: "E3", AMae: "AU", E1: 0, E2: 0.5, E3: 0.5, A1: 0, A2: 0.75, A3: 0.25 },
            { EPai: "E3", APai: "A3", EMae: "E3", AMae: "AU", E1: 0, E2: 0, E3: 1, A1: 0, A2: 0.75, A3: 0.25 },
            { EPai: "EU", APai: "A3", EMae: "E3", AMae: "AU", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 0.75, A3: 0.25 },
            { EPai: "E1", APai: "AU", EMae: "E3", AMae: "AU", E1: 0, E2: 1, E3: 0, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E2", APai: "AU", EMae: "E3", AMae: "AU", E1: 0, E2: 0.5, E3: 0.5, A1: 0.0625, A2: 0.375, A3: 0.5625 },
            { EPai: "E3", APai: "AU", EMae: "E3", AMae: "AU", E1: 0, E2: 0, E3: 1, A1: 0.0625, A2: 0.375, A3: 0.5625 },
            { EPai: "EU", APai: "AU", EMae: "E3", AMae: "AU", E1: 0, E2: 0.25, E3: 0.75, A1: 0.0625, A2: 0.375, A3: 0.5625 },
            { EPai: "E1", APai: "A1", EMae: "EU", AMae: "AU", E1: 0.25, E2: 0.75, E3: 0, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E2", APai: "A1", EMae: "EU", AMae: "AU", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E3", APai: "A1", EMae: "EU", AMae: "AU", E1: 0, E2: 0.25, E3: 0.75, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "EU", APai: "A1", EMae: "EU", AMae: "AU", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0.25, A2: 0.75, A3: 0 },
            { EPai: "E1", APai: "A2", EMae: "EU", AMae: "AU", E1: 0.25, E2: 0.75, E3: 0, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E2", APai: "A2", EMae: "EU", AMae: "AU", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E3", APai: "A2", EMae: "EU", AMae: "AU", E1: 0, E2: 0.25, E3: 0.75, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "EU", APai: "A2", EMae: "EU", AMae: "AU", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E1", APai: "A3", EMae: "EU", AMae: "AU", E1: 0.25, E2: 0.75, E3: 0, A1: 0, A2: 0.75, A3: 0.25 },
            { EPai: "E2", APai: "A3", EMae: "EU", AMae: "AU", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0, A2: 0.75, A3: 0.25 },
            { EPai: "E3", APai: "A3", EMae: "EU", AMae: "AU", E1: 0, E2: 0.25, E3: 0.75, A1: 0, A2: 0.75, A3: 0.25 },
            { EPai: "EU", APai: "A3", EMae: "EU", AMae: "AU", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0, A2: 0.75, A3: 0.25 },
            { EPai: "E1", APai: "AU", EMae: "EU", AMae: "AU", E1: 0.25, E2: 0.75, E3: 0, A1: 0.125, A2: 0.5, A3: 0.375 },
            { EPai: "E2", APai: "AU", EMae: "EU", AMae: "AU", E1: 0.125, E2: 0.5, E3: 0.375, A1: 0.0625, A2: 0.375, A3: 0.5625 },
            { EPai: "E3", APai: "AU", EMae: "EU", AMae: "AU", E1: 0, E2: 0.25, E3: 0.75, A1: 0.0625, A2: 0.375, A3: 0.5625 },
            { EPai: "EU", APai: "AU", EMae: "EU", AMae: "AU", E1: 0.0625, E2: 0.375, E3: 0.5625, A1: 0.0625, A2: 0.375, A3: 0.5625 },
        ],
        CPrl: [
            { CPrlPai: "CPrl1", CPrlMae: "CPrl1", CPrl1: 1, CPrl2: 0, CPrl3: 0, CPrl4: 0, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl2", CPrlMae: "CPrl1", CPrl1: 0.5, CPrl2: 0.5, CPrl3: 0, CPrl4: 0, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl3", CPrlMae: "CPrl1", CPrl1: 0, CPrl2: 1, CPrl3: 0, CPrl4: 0, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl1", CPrlMae: "CPrl2", CPrl1: 0.5, CPrl2: 0.5, CPrl3: 0, CPrl4: 0, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl2", CPrlMae: "CPrl2", CPrl1: 0.25, CPrl2: 0.5, CPrl3: 0.25, CPrl4: 0, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl3", CPrlMae: "CPrl2", CPrl1: 0, CPrl2: 0.5, CPrl3: 0.5, CPrl4: 0, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl1", CPrlMae: "CPrl3", CPrl1: 0, CPrl2: 1, CPrl3: 0, CPrl4: 0, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl2", CPrlMae: "CPrl3", CPrl1: 0, CPrl2: 0.5, CPrl3: 0.5, CPrl4: 0, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl3", CPrlMae: "CPrl3", CPrl1: 0, CPrl2: 0, CPrl3: 1, CPrl4: 0, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl4", CPrlMae: "CPrl1", CPrl1: 0.5, CPrl2: 0, CPrl3: 0, CPrl4: 0.5, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl5", CPrlMae: "CPrl1", CPrl1: 0, CPrl2: 0.5, CPrl3: 0, CPrl4: 0.5, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl6", CPrlMae: "CPrl1", CPrl1: 0, CPrl2: 0, CPrl3: 0, CPrl4: 1, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl4", CPrlMae: "CPrl2", CPrl1: 0.25, CPrl2: 0.25, CPrl3: 0, CPrl4: 0.25, CPrl5: 0.25, CPrl6: 0 },
            { CPrlPai: "CPrl5", CPrlMae: "CPrl2", CPrl1: 0, CPrl2: 0.25, CPrl3: 0.25, CPrl4: 0.25, CPrl5: 0.25, CPrl6: 0 },
            { CPrlPai: "CPrl6", CPrlMae: "CPrl2", CPrl1: 0, CPrl2: 0, CPrl3: 0, CPrl4: 0.5, CPrl5: 0.5, CPrl6: 0 },
            { CPrlPai: "CPrl4", CPrlMae: "CPrl3", CPrl1: 0, CPrl2: 0.5, CPrl3: 0, CPrl4: 0, CPrl5: 0.5, CPrl6: 0 },
            { CPrlPai: "CPrl5", CPrlMae: "CPrl3", CPrl1: 0, CPrl2: 0, CPrl3: 0.5, CPrl4: 0, CPrl5: 0.5, CPrl6: 0 },
            { CPrlPai: "CPrl6", CPrlMae: "CPrl3", CPrl1: 0, CPrl2: 0, CPrl3: 0, CPrl4: 0, CPrl5: 1, CPrl6: 0 },
            { CPrlPai: "CPrl1", CPrlMae: "CPrl4", CPrl1: 0.5, CPrl2: 0, CPrl3: 0, CPrl4: 0.5, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl1", CPrlMae: "CPrl5", CPrl1: 0, CPrl2: 0.5, CPrl3: 0, CPrl4: 0.5, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl1", CPrlMae: "CPrl6", CPrl1: 0, CPrl2: 0, CPrl3: 0, CPrl4: 1, CPrl5: 0, CPrl6: 0 },
            { CPrlPai: "CPrl2", CPrlMae: "CPrl4", CPrl1: 0.25, CPrl2: 0.25, CPrl3: 0, CPrl4: 0.25, CPrl5: 0.25, CPrl6: 0 },
            { CPrlPai: "CPrl2", CPrlMae: "CPrl5", CPrl1: 0, CPrl2: 0.25, CPrl3: 0.25, CPrl4: 0.25, CPrl5: 0.25, CPrl6: 0 },
            { CPrlPai: "CPrl2", CPrlMae: "CPrl6", CPrl1: 0, CPrl2: 0, CPrl3: 0, CPrl4: 0.5, CPrl5: 0.5, CPrl6: 0 },
            { CPrlPai: "CPrl3", CPrlMae: "CPrl4", CPrl1: 0, CPrl2: 0.5, CPrl3: 0, CPrl4: 0, CPrl5: 0.5, CPrl6: 0 },
            { CPrlPai: "CPrl3", CPrlMae: "CPrl5", CPrl1: 0, CPrl2: 0, CPrl3: 0.5, CPrl4: 0, CPrl5: 0.5, CPrl6: 0 },
            { CPrlPai: "CPrl3", CPrlMae: "CPrl6", CPrl1: 0, CPrl2: 0, CPrl3: 0, CPrl4: 0, CPrl5: 1, CPrl6: 0 },
            { CPrlPai: "CPrl4", CPrlMae: "CPrl4", CPrl1: 0.25, CPrl2: 0, CPrl3: 0, CPrl4: 0.5, CPrl5: 0, CPrl6: 0.25 },
            { CPrlPai: "CPrl5", CPrlMae: "CPrl4", CPrl1: 0, CPrl2: 0.25, CPrl3: 0, CPrl4: 0.25, CPrl5: 0.25, CPrl6: 0.25 },
            { CPrlPai: "CPrl6", CPrlMae: "CPrl4", CPrl1: 0, CPrl2: 0, CPrl3: 0, CPrl4: 0.5, CPrl5: 0, CPrl6: 0.5 },
            { CPrlPai: "CPrl4", CPrlMae: "CPrl5", CPrl1: 0, CPrl2: 0.25, CPrl3: 0, CPrl4: 0.25, CPrl5: 0.25, CPrl6: 0.25 },
            { CPrlPai: "CPrl5", CPrlMae: "CPrl5", CPrl1: 0, CPrl2: 0, CPrl3: 0.25, CPrl4: 0, CPrl5: 0.5, CPrl6: 0.25 },
            { CPrlPai: "CPrl6", CPrlMae: "CPrl5", CPrl1: 0, CPrl2: 0, CPrl3: 0, CPrl4: 0, CPrl5: 0.5, CPrl6: 0.5 },
            { CPrlPai: "CPrl4", CPrlMae: "CPrl6", CPrl1: 0, CPrl2: 0, CPrl3: 0, CPrl4: 0.5, CPrl5: 0, CPrl6: 0.5 },
            { CPrlPai: "CPrl5", CPrlMae: "CPrl6", CPrl1: 0, CPrl2: 0, CPrl3: 0, CPrl4: 0, CPrl5: 0.5, CPrl6: 0.5 },
            { CPrlPai: "CPrl6", CPrlMae: "CPrl6", CPrl1: 0, CPrl2: 0, CPrl3: 0, CPrl4: 0, CPrl5: 0, CPrl6: 1 },
        ],
        Z: [
            { ZPai: "Z1", ZMae: "Z1", Z1: 1, Z2: 0, Z3: 0 },
            { ZPai: "Z2", ZMae: "Z1", Z1: 0.5, Z2: 0.5, Z3: 0 },
            { ZPai: "Z3", ZMae: "Z1", Z1: 0, Z2: 1, Z3: 0 },
            { ZPai: "ZU", ZMae: "Z1", Z1: 0.25, Z2: 0.75, Z3: 0 },
            { ZPai: "Z1", ZMae: "Z2", Z1: 0.5, Z2: 0.5, Z3: 0 },
            { ZPai: "Z2", ZMae: "Z2", Z1: 0.25, Z2: 0.5, Z3: 0.25 },
            { ZPai: "Z3", ZMae: "Z2", Z1: 0, Z2: 0.5, Z3: 0.5 },
            { ZPai: "ZU", ZMae: "Z2", Z1: 0.125, Z2: 0.5, Z3: 0.375 },
            { ZPai: "Z1", ZMae: "Z3", Z1: 0, Z2: 1, Z3: 0 },
            { ZPai: "Z2", ZMae: "Z3", Z1: 0, Z2: 0.5, Z3: 0.5 },
            { ZPai: "Z3", ZMae: "Z3", Z1: 0, Z2: 0, Z3: 1 },
            { ZPai: "ZU", ZMae: "Z3", Z1: 0, Z2: 0.25, Z3: 0.75 },
            { ZPai: "Z1", ZMae: "ZU", Z1: 0.25, Z2: 0.75, Z3: 0 },
            { ZPai: "Z2", ZMae: "ZU", Z1: 0.125, Z2: 0.5, Z3: 0.375 },
            { ZPai: "Z3", ZMae: "ZU", Z1: 0, Z2: 0.25, Z3: 0.75 },
            { ZPai: "ZU", ZMae: "ZU", Z1: 0.0625, Z2: 0.375, Z3: 0.5625 },
        ],
        G: [
            { GPai: "G1", GMae: "G1", G1: 1, G2: 0, G3: 0 },
            { GPai: "G2", GMae: "G1", G1: 0.5, G2: 0.5, G3: 0 },
            { GPai: "G3", GMae: "G1", G1: 0, G2: 1, G3: 0 },
            { GPai: "GU", GMae: "G1", G1: 0.25, G2: 0.75, G3: 0 },
            { GPai: "G1", GMae: "G2", G1: 0.5, G2: 0.5, G3: 0 },
            { GPai: "G2", GMae: "G2", G1: 0.25, G2: 0.5, G3: 0.25 },
            { GPai: "G3", GMae: "G2", G1: 0, G2: 0.5, G3: 0.5 },
            { GPai: "GU", GMae: "G2", G1: 0.125, G2: 0.5, G3: 0.375 },
            { GPai: "G1", GMae: "G3", G1: 0, G2: 1, G3: 0 },
            { GPai: "G2", GMae: "G3", G1: 0, G2: 0.5, G3: 0.5 },
            { GPai: "G3", GMae: "G3", G1: 0, G2: 0, G3: 1 },
            { GPai: "GU", GMae: "G3", G1: 0, G2: 0.25, G3: 0.75 },
            { GPai: "G1", GMae: "GU", G1: 0.25, G2: 0.75, G3: 0 },
            { GPai: "G2", GMae: "GU", G1: 0.125, G2: 0.5, G3: 0.375 },
            { GPai: "G3", GMae: "GU", G1: 0, G2: 0.25, G3: 0.75 },
            { GPai: "GU", GMae: "GU", G1: 0.0625, G2: 0.375, G3: 0.5625 },
        ],
        D: [
            { DPai: "D1", DMae: "D1", D1: 1, D2: 0, D3: 0 },
            { DPai: "D2", DMae: "D1", D1: 0.5, D2: 0.5, D3: 0 },
            { DPai: "D3", DMae: "D1", D1: 0, D2: 1, D3: 0 },
            { DPai: "DU", DMae: "D1", D1: 0.25, D2: 0.75, D3: 0 },
            { DPai: "D1", DMae: "D2", D1: 0.5, D2: 0.5, D3: 0 },
            { DPai: "D2", DMae: "D2", D1: 0.25, D2: 0.5, D3: 0.25 },
            { DPai: "D3", DMae: "D2", D1: 0, D2: 0.5, D3: 0.5 },
            { DPai: "DU", DMae: "D2", D1: 0.125, D2: 0.5, D3: 0.375 },
            { DPai: "D1", DMae: "D3", D1: 0, D2: 1, D3: 0 },
            { DPai: "D2", DMae: "D3", D1: 0, D2: 0.5, D3: 0.5 },
            { DPai: "D3", DMae: "D3", D1: 0, D2: 0, D3: 1 },
            { DPai: "DU", DMae: "D3", D1: 0, D2: 0.25, D3: 0.75 },
            { DPai: "D1", DMae: "DU", D1: 0.25, D2: 0.75, D3: 0 },
            { DPai: "D2", DMae: "DU", D1: 0.125, D2: 0.5, D3: 0.375 },
            { DPai: "D3", DMae: "DU", D1: 0, D2: 0.25, D3: 0.75 },
            { DPai: "DU", DMae: "DU", D1: 0.0625, D2: 0.375, D3: 0.5625 },
        ],
        Ch: [
            { ChPai: "Ch1", ChMae: "Ch1", Ch1: 1, Ch2: 0, Ch3: 0 },
            { ChPai: "Ch2", ChMae: "Ch1", Ch1: 0.5, Ch2: 0.5, Ch3: 0 },
            { ChPai: "Ch3", ChMae: "Ch1", Ch1: 0, Ch2: 1, Ch3: 0 },
            { ChPai: "Ch1", ChMae: "Ch2", Ch1: 0.5, Ch2: 0.5, Ch3: 0 },
            { ChPai: "Ch2", ChMae: "Ch2", Ch1: 0.25, Ch2: 0.5, Ch3: 0.25 },
            { ChPai: "Ch3", ChMae: "Ch2", Ch1: 0, Ch2: 0.5, Ch3: 0.5 },
            { ChPai: "Ch1", ChMae: "Ch3", Ch1: 0, Ch2: 1, Ch3: 0 },
            { ChPai: "Ch2", ChMae: "Ch3", Ch1: 0, Ch2: 0.5, Ch3: 0.5 },
            { ChPai: "Ch3", ChMae: "Ch3", Ch1: 0, Ch2: 0, Ch3: 1 },
        ],
        R: [
            { RPai: "R1", RMae: "R1", R1: 1, R2: 0, R3: 0 },
            { RPai: "R2", RMae: "R1", R1: 0.5, R2: 0.5, R3: 0 },
            { RPai: "R3", RMae: "R1", R1: 0, R2: 1, R3: 0 },
            { RPai: "RU", RMae: "R1", R1: 0.25, R2: 0.75, R3: 0 },
            { RPai: "R1", RMae: "R2", R1: 0.5, R2: 0.5, R3: 0 },
            { RPai: "R2", RMae: "R2", R1: 0.25, R2: 0.5, R3: 0.25 },
            { RPai: "R3", RMae: "R2", R1: 0, R2: 0.5, R3: 0.5 },
            { RPai: "RU", RMae: "R2", R1: 0.125, R2: 0.5, R3: 0.375 },
            { RPai: "R1", RMae: "R3", R1: 0, R2: 1, R3: 0 },
            { RPai: "R2", RMae: "R3", R1: 0, R2: 0.5, R3: 0.5 },
            { RPai: "R3", RMae: "R3", R1: 0, R2: 0, R3: 1 },
            { RPai: "RU", RMae: "R3", R1: 0, R2: 0.25, R3: 0.75 },
            { RPai: "R1", RMae: "RU", R1: 0.25, R2: 0.75, R3: 0 },
            { RPai: "R2", RMae: "RU", R1: 0.125, R2: 0.5, R3: 0.375 },
            { RPai: "R3", RMae: "RU", R1: 0, R2: 0.25, R3: 0.75 },
            { RPai: "RU", RMae: "RU", R1: 0.0625, R2: 0.375, R3: 0.5625 },
        ],
        T: [
            { TPai: "T1", TMae: "T1", T1: 1, T2: 0, T3: 0 },
            { TPai: "T2", TMae: "T1", T1: 0.5, T2: 0.5, T3: 0 },
            { TPai: "T3", TMae: "T1", T1: 0, T2: 1, T3: 0 },
            { TPai: "TU", TMae: "T1", T1: 0.25, T2: 0.75, T3: 0 },
            { TPai: "T1", TMae: "T2", T1: 0.5, T2: 0.5, T3: 0 },
            { TPai: "T2", TMae: "T2", T1: 0.25, T2: 0.5, T3: 0.25 },
            { TPai: "T3", TMae: "T2", T1: 0, T2: 0.5, T3: 0.5 },
            { TPai: "TU", TMae: "T2", T1: 0.125, T2: 0.5, T3: 0.375 },
            { TPai: "T1", TMae: "T3", T1: 0, T2: 1, T3: 0 },
            { TPai: "T2", TMae: "T3", T1: 0, T2: 0.5, T3: 0.5 },
            { TPai: "T3", TMae: "T3", T1: 0, T2: 0, T3: 1 },
            { TPai: "TU", TMae: "T3", T1: 0, T2: 0.25, T3: 0.75 },
            { TPai: "T1", TMae: "TU", T1: 0.25, T2: 0.75, T3: 0 },
            { TPai: "T2", TMae: "TU", T1: 0.125, T2: 0.5, T3: 0.375 },
            { TPai: "T3", TMae: "TU", T1: 0, T2: 0.25, T3: 0.75 },
            { TPai: "TU", TMae: "TU", T1: 0.0625, T2: 0.375, T3: 0.5625 },
        ],
        O: [
            { OPai: "O1", OMae: "O1", O1: 1, O2: 0, O3: 0 },
            { OPai: "O2", OMae: "O1", O1: 0.5, O2: 0.5, O3: 0 },
            { OPai: "O1", OMae: "O2", O1: 0.5, O2: 0.5, O3: 0 },
            { OPai: "O2", OMae: "O2", O1: 0.25, O2: 0.5, O3: 0.25 },
        ],
        S: [
            { SPai: "S1", SMae: "S1", S1: 1, S2: 0, S3: 0 },
            { SPai: "S2", SMae: "S1", S1: 0.5, S2: 0.5, S3: 0 },
            { SPai: "S3", SMae: "S1", S1: 0, S2: 1, S3: 0 },
            { SPai: "SU", SMae: "S1", S1: 0.25, S2: 0.75, S3: 0 },
            { SPai: "S1", SMae: "S2", S1: 0.5, S2: 0.5, S3: 0 },
            { SPai: "S2", SMae: "S2", S1: 0.25, S2: 0.5, S3: 0.25 },
            { SPai: "S3", SMae: "S2", S1: 0, S2: 0.5, S3: 0.5 },
            { SPai: "SU", SMae: "S2", S1: 0.125, S2: 0.5, S3: 0.375 },
            { SPai: "S1", SMae: "S3", S1: 0, S2: 1, S3: 0 },
            { SPai: "S2", SMae: "S3", S1: 0, S2: 0.5, S3: 0.5 },
            { SPai: "S3", SMae: "S3", S1: 0, S2: 0, S3: 1 },
            { SPai: "SU", SMae: "S3", S1: 0, S2: 0.25, S3: 0.75 },
            { SPai: "S1", SMae: "SU", S1: 0.25, S2: 0.75, S3: 0 },
            { SPai: "S2", SMae: "SU", S1: 0.125, S2: 0.5, S3: 0.375 },
            { SPai: "S3", SMae: "SU", S1: 0, S2: 0.25, S3: 0.75 },
            { SPai: "SU", SMae: "SU", S1: 0.0625, S2: 0.375, S3: 0.5625 },
        ],
        Sh: [
            { ShPai: "Sh1", ShMae: "Sh1", Sh1: 1, Sh2: 0, Sh3: 0 },
            { ShPai: "Sh2", ShMae: "Sh1", Sh1: 0.5, Sh2: 0.5, Sh3: 0 },
            { ShPai: "Sh3", ShMae: "Sh1", Sh1: 0, Sh2: 1, Sh3: 0 },
            { ShPai: "Sh1", ShMae: "Sh2", Sh1: 0.5, Sh2: 0.5, Sh3: 0 },
            { ShPai: "Sh2", ShMae: "Sh2", Sh1: 0.25, Sh2: 0.5, Sh3: 0.25 },
            { ShPai: "Sh3", ShMae: "Sh2", Sh1: 0, Sh2: 0.5, Sh3: 0.5 },
            { ShPai: "Sh1", ShMae: "Sh3", Sh1: 0, Sh2: 1, Sh3: 0 },
            { ShPai: "Sh2", ShMae: "Sh3", Sh1: 0, Sh2: 0.5, Sh3: 0.5 },
            { ShPai: "Sh3", ShMae: "Sh3", Sh1: 0, Sh2: 0, Sh3: 1 },
        ],
        Lp: [
            { LpPai: "Lp1", LpMae: "Lp1", Lp1: 1, Lp2: 0, Lp3: 0 },
            { LpPai: "Lp2", LpMae: "Lp1", Lp1: 0.5, Lp2: 0.5, Lp3: 0 },
            { LpPai: "Lp3", LpMae: "Lp1", Lp1: 0, Lp2: 1, Lp3: 0 },
            { LpPai: "Lp1", LpMae: "Lp2", Lp1: 0.5, Lp2: 0.5, Lp3: 0 },
            { LpPai: "Lp2", LpMae: "Lp2", Lp1: 0.25, Lp2: 0.5, Lp3: 0.25 },
            { LpPai: "Lp3", LpMae: "Lp2", Lp1: 0, Lp2: 0.5, Lp3: 0.5 },
            { LpPai: "Lp1", LpMae: "Lp3", Lp1: 0, Lp2: 1, Lp3: 0 },
            { LpPai: "Lp2", LpMae: "Lp3", Lp1: 0, Lp2: 0.5, Lp3: 0.5 },
            { LpPai: "Lp3", LpMae: "Lp3", Lp1: 0, Lp2: 0, Lp3: 1 },
        ],
        PATN1: [
            { PATN1Pai: "PATN11", PATN1Mae: "PATN11", PATN11: 1, PATN12: 0, PATN13: 0 },
            { PATN1Pai: "PATN12", PATN1Mae: "PATN11", PATN11: 0.5, PATN12: 0.5, PATN13: 0 },
            { PATN1Pai: "PATN13", PATN1Mae: "PATN11", PATN11: 0, PATN12: 1, PATN13: 0 },
            { PATN1Pai: "PATN11", PATN1Mae: "PATN12", PATN11: 0.5, PATN12: 0.5, PATN13: 0 },
            { PATN1Pai: "PATN12", PATN1Mae: "PATN12", PATN11: 0.25, PATN12: 0.5, PATN13: 0.25 },
            { PATN1Pai: "PATN13", PATN1Mae: "PATN12", PATN11: 0, PATN12: 0.5, PATN13: 0.5 },
            { PATN1Pai: "PATN11", PATN1Mae: "PATN13", PATN11: 0, PATN12: 1, PATN13: 0 },
            { PATN1Pai: "PATN12", PATN1Mae: "PATN13", PATN11: 0, PATN12: 0.5, PATN13: 0.5 },
            { PATN1Pai: "PATN13", PATN1Mae: "PATN13", PATN11: 0, PATN12: 0, PATN13: 1 },
        ],
        Colors: [
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Alazão (Sorrel)" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Preto" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Preto" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Alazão (Sorrel)" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Alazão (Sorrel)" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Palomino" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Preto Esfumado" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Preto Esfumado" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Palomino" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Palomino" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Cremello" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Creme Esfumado" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Creme Esfumado" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Cremello" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Perlino" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Perlino" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Cremello" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Perlino" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Perlino" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Alazão (Sorrel)" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Negro Prateado" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Negro Prateado" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Alazão (Sorrel)" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho Prateado" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho Prateado" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Alazão (Sorrel)" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho Prateado" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho Prateado" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Palomino" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Negro Prateado Esfumado" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Negro Prateado Esfumado" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Palomino" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio Prateado" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio Prateado" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Palomino" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio Prateado" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio Prateado" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Cremello" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Creme Esfumado Prateado" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Creme Esfumado Prateado" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Cremello" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Perlino Prateado" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Perlino Prateado" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Cremello" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Perlino Prateado" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Perlino Prateado" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Alazão Dun" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Alazão Dun" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Dun (Zebra Dun)" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Dun (Zebra Dun)" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Alazão Dun" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Dun (Zebra Dun)" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Dun (Zebra Dun)" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunalino" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Esfumado" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Esfumado" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunalino" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunalino" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Cremello Dun" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Creme Esfumado Dun" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Creme Esfumado Dun" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Cremello Dun" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Perlino Dun" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Perlino Dun" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Cremello Dun" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Perlino Dun" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Perlino Dun" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Alazão Dun" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Prateado" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Prateado" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Alazão Dun" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Prateado Dun" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Prateado Dun" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Alazão Dun" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Prateado Dun" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Prateado Dun" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunalino" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Esfumado Prateado" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Esfumado Prateado" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunalino" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin Prateado" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin Prateado" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunalino" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin Prateado" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin Prateado" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Cremello Dun" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Creme Esfumado Prateado Dun" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Creme Esfumado Prateado Dun" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Cremello Dun" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Perlino Prateado Dun" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Perlino Prateado Dun" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Cremello Dun" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Perlino Prateado Dun" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Perlino Prateado Dun" }, 
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Alazão" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Alazão" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Alazão" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Palomino" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro Esfumaçado" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro Esfumaçado" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Palomino" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Palomino" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Cremello" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Creme Esfumado" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Creme Esfumado" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Cremello" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Perlino" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Perlino" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Cremello" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Perlino" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Perlino" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Alazão" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Negro Prateado" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Negro Prateado" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Alazão" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho Prateado" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho Prateado" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Alazão" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho Prateado" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho Prateado" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Palomino" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro Esfumaçado Prateado" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro Esfumaçado Prateado" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Palomino" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio Prateado" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio Prateado" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Palomino" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio Prateado" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio Prateado" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Cremello" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Creme Esfumado Prateado" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Creme Esfumado Prateado" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Cremello" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Perlino Prateado" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Perlino Prateado" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Cremello" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Perlino Prateado" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Perlino Prateado" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Alazão Dun" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Alazão Dun" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Dun" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Dun" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Alazão Dun" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Dun" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Dun" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunalino" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Esfumado" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Esfumado" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunalino" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunskin" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunskin" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunalino" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunskin" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunskin" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Cremello Dun" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Creme Esfumado Dun" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Creme Esfumado Dun" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Cremello Dun" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Perlino Dun" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Perlino Dun" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Cremello Dun" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Perlino Dun" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Perlino Dun" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Alazão Dun" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Prateado" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Prateado" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Alazão Dun" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Prateado Dun" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Prateado Dun" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Alazão Dun" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Prateado Dun" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Prateado Dun" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunalino" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Esfumado Prateado" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Esfumado Prateado" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunalino" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunskin Prateado" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunskin Prateado" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunalino" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunskin Prateado" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Dunskin Prateado" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Cremello Dun" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Creme Esfumado Prateado Dun" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Creme Esfumado Prateado Dun" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Cremello Dun" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Perlino Prateado Dun" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Perlino Prateado Dun" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Cremello Dun" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Perlino Prateado Dun" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Perlino Prateado Dun" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Marfim" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Clássico" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Clássico" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Marfim" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Marfim" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Marfim Creme" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Clássico Creme" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Clássico Creme" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Marfim Creme" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Marfim Creme" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Cremello" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Creme Esfumado" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Creme Esfumado" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Cremello" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Perlino" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Perlino" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Cremello" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Perlino" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Perlino" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Marfim" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Clássico Prateado" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Clássico Prateado" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Marfim" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Prateado" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Prateado" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Marfim" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Prateado" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Prateado" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Marfim Creme" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Clássico Creme Prateado" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Clássico Creme Prateado" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Marfim Creme" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme Prateado" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme Prateado" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Marfim Creme" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme Prateado" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme Prateado" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Cremello" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Creme Esfumado Prateado" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Creme Esfumado Prateado" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Cremello" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Perlino Prateado" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Perlino Prateado" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Cremello" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Perlino Prateado" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Perlino Prateado" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Marfim Dun" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Clássico Dun" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Clássico Dun" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Marfim Dun" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Dun" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Dun" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Marfim Dun" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Dun" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Dun" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Marfim Creme Dun" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Clássico Creme Dun" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Clássico Creme Dun" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Marfim Creme Dun" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme Dun" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme Dun" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Marfim Creme Dun" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme Dun" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme Dun" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Cremello Dun" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Creme Esfumado Dun" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Creme Esfumado Dun" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Cremello Dun" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Perlino Dun" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Perlino Dun" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Cremello Dun" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Perlino Dun" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Perlino Dun" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Marfim Dun" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Clássico Prateado Dun" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Clássico Prateado Dun" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Marfim Dun" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Prateado Dun" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Prateado Dun" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Marfim Dun" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Prateado Dun" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Prateado Dun" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Marfim Creme Dun" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Clássico Creme Prateado Dun" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Clássico Creme Prateado Dun" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Marfim Creme Dun" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme Prateado Dun" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme Prateado Dun" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Marfim Creme Dun" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme Prateado Dun" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Creme Prateado Dun" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Cremello Dun" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Creme Esfumado Prateado Dun" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Creme Esfumado Prateado Dun" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Cremello Dun" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Perlino Prateado Dun" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Perlino Prateado Dun" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Cremello Dun" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Perlino Prateado Dun" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Perlino Prateado Dun" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Creme" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Creme" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Creme" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Creme" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Creme" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Cremello" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Creme Esfumado" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Creme Esfumado" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Cremello" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Cremello" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Prateado" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Prateado" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Prateado" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Prateado" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Prateado" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Prateado" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Creme" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Creme Prateado" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Creme Prateado" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Creme" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme Prateado" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme Prateado" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Creme" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme Prateado" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme Prateado" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Cremello" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Creme Esfumado Prateado" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Creme Esfumado Prateado" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Cremello" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino Prateado" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino Prateado" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Cremello" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino Prateado" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino Prateado" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Dun" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Dun" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Dun" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Dun" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Dun" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Dun" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Dun" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Dun" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Dun" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Creme Dun" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Creme Dun" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Creme Dun" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Creme Dun" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme Dun" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme Dun" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Creme Dun" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme Dun" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme Dun" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Cremello Dun" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Creme Esfumado Dun" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Creme Esfumado Dun" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Cremello Dun" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino Dun" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino Dun" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Cremello Dun" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino Dun" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino Dun" },
            { Codigo: "ee | aa", E: 1, A: 1, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Dun" },
            { Codigo: "Ee | aa", E: 2, A: 1, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Prateado Dun" },
            { Codigo: "EE | aa", E: 3, A: 1, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Prateado Dun" },
            { Codigo: "ee | Aa", E: 1, A: 2, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Dun" },
            { Codigo: "Ee | Aa", E: 2, A: 2, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Prateado Dun" },
            { Codigo: "EE | Aa", E: 3, A: 2, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Prateado Dun" },
            { Codigo: "ee | AA", E: 1, A: 3, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Dun" },
            { Codigo: "Ee | AA", E: 2, A: 3, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Prateado Dun" },
            { Codigo: "EE | AA", E: 3, A: 3, CPrl: 1, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Prateado Dun" },
            { Codigo: "ee | aa | nCr", E: 1, A: 1, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Creme Dun" },
            { Codigo: "Ee | aa | nCr", E: 2, A: 1, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Creme Prateado Dun" },
            { Codigo: "EE | aa | nCr", E: 3, A: 1, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Clássico Creme Prateado Dun" },
            { Codigo: "ee | Aa | nCr", E: 1, A: 2, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Creme Dun" },
            { Codigo: "Ee | Aa | nCr", E: 2, A: 2, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme Prateado Dun" },
            { Codigo: "EE | Aa | nCr", E: 3, A: 2, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme Prateado Dun" },
            { Codigo: "ee | AA | nCr", E: 1, A: 3, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Marfim Creme Dun" },
            { Codigo: "Ee | AA | nCr", E: 2, A: 3, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme Prateado Dun" },
            { Codigo: "EE | AA | nCr", E: 3, A: 3, CPrl: 2, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Creme Prateado Dun" },
            { Codigo: "ee | aa | CrCr", E: 1, A: 1, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Cremello Dun" },
            { Codigo: "Ee | aa | CrCr", E: 2, A: 1, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Creme Esfumado Prateado Dun" },
            { Codigo: "EE | aa | CrCr", E: 3, A: 1, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Creme Esfumado Prateado Dun" },
            { Codigo: "ee | Aa | CrCr", E: 1, A: 2, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Cremello Dun" },
            { Codigo: "Ee | Aa | CrCr", E: 2, A: 2, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino Prateado Dun" },
            { Codigo: "EE | Aa | CrCr", E: 3, A: 2, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino Prateado Dun" },
            { Codigo: "ee | AA | CrCr", E: 1, A: 3, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Cremello Dun" },
            { Codigo: "Ee | AA | CrCr", E: 2, A: 3, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino Prateado Dun" },
            { Codigo: "EE | AA | CrCr", E: 3, A: 3, CPrl: 3, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Perlino Prateado Dun" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Alazão Pérola" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Negro Pérola" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Negro Pérola" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Alazão Pérola" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho Pérola" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho Pérola" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Alazão Pérola" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho Pérola" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho Pérola" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Palomino Pérola" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Preto Esfumado Pérola" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Preto Esfumado Pérola" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Palomino Pérola" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio Pérola" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio Pérola" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Palomino Pérola" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio Pérola" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio Pérola" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Ouro Pérola" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Pérola Clássico" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Pérola Clássico" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Ouro Pérola" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Âmbar Pérola" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Âmbar Pérola" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Ouro Pérola" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Âmbar Pérola" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 1, Cor: "Âmbar Pérola" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Alazão Pérola" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Negro Pérola Prateado" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Negro Pérola Prateado" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Alazão Pérola" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho Pérola Prateado" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho Pérola Prateado" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Alazão Pérola" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho Pérola Prateado" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Castanho Pérola Prateado" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Palomino Pérola" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Negro Pérola Esfumaçado Prateado" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Negro Pérola Esfumaçado Prateado" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Palomino Pérola" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio Pérola Prateado" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio Pérola Prateado" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Palomino Pérola" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio Pérola Prateado" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Baio Pérola Prateado" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Ouro Pérola" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Pérola Clássico Prateado" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Pérola Clássico Prateado" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Ouro Pérola" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Âmbar Pérola Prateado" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Âmbar Pérola Prateado" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Ouro Pérola" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Âmbar Pérola Prateado" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 1, Cor: "Âmbar Pérola Prateado" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Alazão Pérola" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Pérola" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Pérola" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Alazão Pérola" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Pérola Dun" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Pérola Dun" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Alazão Pérola" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Pérola Dun" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Pérola Dun" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunalino Pérola" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Pérola Esfumado" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Pérola Esfumado" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunalino Pérola" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin Pérola" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin Pérola" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunalino Pérola" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin Pérola" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin Pérola" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Ouro Pérola Dun" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Pérola Clássico Dun" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Pérola Clássico Dun" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Âmbar Pérola Dun" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Âmbar Pérola Dun" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Ouro Pérola Dun" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Âmbar Pérola Dun" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 1, Cor: "Âmbar Pérola Dun" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Alazão Pérola" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Pérola Prateado" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Pérola Prateado" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Alazão Pérola" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Pérola Prateado Dun" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Pérola Prateado Dun" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Alazão Pérola" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Pérola Prateado Dun" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Castanho Pérola Prateado Dun" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunalino Pérola" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Pérola Esfumado Prateado" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Lobuno Pérola Esfumado Prateado" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunalino Pérola" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin Pérola Prateado" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin Pérola Prateado" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunalino Pérola" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin Pérola Prateado" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Dunskin Pérola Prateado" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Ouro Pérola Dun" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Pérola Clássico Prateado Dun" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Pérola Clássico Prateado Dun" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Ouro Pérola Dun" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 1, Cor: "Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Alazão Pérola" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro Pérola" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro Pérola" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Alazão Pérola" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Alazão Pérola" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Palomino Pérola" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro Pérola Esfumaçado" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro Pérola Esfumaçado" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Palomino Pérola" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio Pérola" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio Pérola" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Palomino Pérola" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio Pérola" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio Pérola" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Ouro Pérola" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Pérola Clássico" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Pérola Clássico" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Ouro Pérola" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Ouro Pérola" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Alazão Pérola" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro Pérola Prateado" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro Pérola Prateado" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Alazão Pérola" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola Prateado" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola Prateado" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Alazão Pérola" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola Prateado" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola Prateado" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Palomino Pérola" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro Pérola Esfumaçado Prateado" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Negro Pérola Esfumaçado Prateado" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Palomino Pérola" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio Pérola Prateado" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio Pérola Prateado" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Palomino Pérola" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio Pérola Prateado" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Baio Pérola Prateado" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Ouro Pérola" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Pérola Clássico Prateado" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Pérola Clássico Prateado" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Ouro Pérola" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola Prateado" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola Prateado" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho de Ouro Pérola" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola Prateado" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola Prateado" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Alazão Pérola" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Pérola" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Pérola" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Alazão Pérola" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola Dun" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola Dun" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Alazão Pérola" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola Dun" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola Dun" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunalino Pérola" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Pérola Esfumado" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Pérola Esfumado" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunalino Pérola" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunskin Pérola" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunskin Pérola" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunalino Pérola" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunskin Pérola" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunskin Pérola" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Ouro Pérola Dun" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Pérola Clássico Dun" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Pérola Clássico Dun" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola Dun" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola Dun" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Ouro Pérola Dun" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola Dun" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola Dun" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Alazão Pérola" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Pérola Prateado" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Pérola Prateado" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Alazão Pérola" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola Prateado Dun" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola Prateado Dun" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Alazão Pérola" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola Prateado Dun" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Castanho Pérola Prateado Dun" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunalino Pérola" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Pérola Esfumado Prateado" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Lobuno Pérola Esfumado Prateado" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunalino Pérola" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunskin Pérola Prateado" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunskin Pérola Prateado" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunalino Pérola" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunskin Pérola Prateado" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Dunskin Pérola Prateado" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Ouro Pérola Dun" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Pérola Clássico Prateado Dun" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Pérola Clássico Prateado Dun" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho de Ouro Pérola Dun" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 1, Cor: "Rosilho Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 1, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Prateado" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Prateado" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Prateado" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Prateado" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Prateado" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Prateado" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 2, G: 1, D: 1, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Dun" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Dun" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Dun" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Dun" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Dun" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Dun" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Dun" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Dun" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Dun" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Dun" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Dun" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Dun" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Dun" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Dun" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Dun" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Dun" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Dun" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 1, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Dun" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Prateado Dun" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Prateado Dun" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Prateado Dun" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Prateado Dun" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Prateado Dun" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Pérola Clássico Prateado Dun" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 2, G: 1, D: 2, R: 1, Ch: 2, Cor: "Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 1, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Prateado" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Prateado" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Prateado" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Prateado" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Prateado" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Prateado" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 2, G: 1, D: 1, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Dun" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Dun" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Dun" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Dun" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Dun" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Dun" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Dun" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Dun" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho Âmbar Pérola Cham. Dun" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho Âmbar Pérola Cham. Dun" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho Âmbar Pérola Cham. Dun" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho Âmbar Pérola Cham. Dun" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Dun" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Dun" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Dun" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Dun" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Dun" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 1, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Dun" },
            { Codigo: "ee | aa | nPrl", E: 1, A: 1, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | aa | nPrl", E: 2, A: 1, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Prateado Dun" },
            { Codigo: "EE | aa | nPrl", E: 3, A: 1, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Prateado Dun" },
            { Codigo: "ee | Aa | nPrl", E: 1, A: 2, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | nPrl", E: 2, A: 2, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | Aa | nPrl", E: 3, A: 2, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | AA | nPrl", E: 1, A: 3, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | AA | nPrl", E: 2, A: 3, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | AA | nPrl", E: 3, A: 3, CPrl: 4, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | aa | CrPrl", E: 1, A: 1, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | aa | CrPrl", E: 2, A: 1, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Prateado Dun" },
            { Codigo: "EE | aa | CrPrl", E: 3, A: 1, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Prateado Dun" },
            { Codigo: "ee | Aa | CrPrl", E: 1, A: 2, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | CrPrl", E: 2, A: 2, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | Aa | CrPrl", E: 3, A: 2, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | AA | CrPrl", E: 1, A: 3, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | AA | CrPrl", E: 2, A: 3, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | AA | CrPrl", E: 3, A: 3, CPrl: 5, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | aa | PrlPrl", E: 1, A: 1, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | aa | PrlPrl", E: 2, A: 1, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Prateado Dun" },
            { Codigo: "EE | aa | PrlPrl", E: 3, A: 1, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Pérola Clássico Prateado Dun" },
            { Codigo: "ee | Aa | PrlPrl", E: 1, A: 2, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | Aa | PrlPrl", E: 2, A: 2, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | Aa | PrlPrl", E: 3, A: 2, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "ee | AA | PrlPrl", E: 1, A: 3, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Ouro Pérola Dun" },
            { Codigo: "Ee | AA | PrlPrl", E: 2, A: 3, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado Dun" },
            { Codigo: "EE | AA | PrlPrl", E: 3, A: 3, CPrl: 6, Z: 2, G: 1, D: 2, R: 2, Ch: 2, Cor: "Rosilho de Champagne Âmbar Pérola Prateado Dun" },
        ],
        Padroes: [
            { Codigo: null, T: 1, O: 1, S: 1, Sh: 1, Lp: 1, PATN1: 1, Padrao: null },
            { Codigo: "nT", T: 2, O: 1, S: 1, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Tobiano" },
            { Codigo: "TT", T: 3, O: 1, S: 1, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Tobiano" },
            { Codigo: "nO", T: 1, O: 2, S: 1, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Frame Overo" },
            { Codigo: "nT | nO", T: 2, O: 2, S: 1, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nO", T: 3, O: 2, S: 1, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "OO", T: 1, O: 3, S: 1, Sh: 1, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO", T: 2, O: 3, S: 1, Sh: 1, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO", T: 3, O: 3, S: 1, Sh: 1, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nSb", T: 1, O: 1, S: 2, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Sabino" },
            { Codigo: "nT | nSb", T: 2, O: 1, S: 2, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nSb", T: 3, O: 1, S: 2, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "nO | nSb", T: 1, O: 2, S: 2, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Frame Overo | Sabino" },
            { Codigo: "nT | nO | nSb", T: 2, O: 2, S: 2, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nO | nSb", T: 3, O: 2, S: 2, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "nSb | OO", T: 1, O: 3, S: 2, Sh: 1, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | nSb | OO", T: 2, O: 3, S: 2, Sh: 1, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | nSb | OO", T: 3, O: 3, S: 2, Sh: 1, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "SbSb", T: 1, O: 1, S: 3, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Sabino" },
            { Codigo: "nT | SbSb", T: 2, O: 1, S: 3, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | SbSb", T: 3, O: 1, S: 3, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "nO | SbSb", T: 1, O: 2, S: 3, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Frame Overo | Sabino" },
            { Codigo: "nT | nO | SbSb", T: 2, O: 2, S: 3, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nO | SbSb", T: 3, O: 2, S: 3, Sh: 1, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "SbSb | OO", T: 1, O: 3, S: 3, Sh: 1, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | SbSb | OO", T: 2, O: 3, S: 3, Sh: 1, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | SbSb | OO", T: 3, O: 3, S: 3, Sh: 1, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nSpl", T: 1, O: 1, S: 1, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Splash" },
            { Codigo: "nT | nSpl", T: 2, O: 1, S: 1, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nSpl", T: 3, O: 1, S: 1, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "nO | nSpl", T: 1, O: 2, S: 1, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Frame Overo | Splash" },
            { Codigo: "nT | nO | nSpl", T: 2, O: 2, S: 1, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nO | nSpl", T: 3, O: 2, S: 1, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "nSpl | OO", T: 1, O: 3, S: 1, Sh: 2, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | nSpl | OO", T: 2, O: 3, S: 1, Sh: 2, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | nSpl | OO", T: 3, O: 3, S: 1, Sh: 2, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nSb | nSpl", T: 1, O: 1, S: 2, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Sabino | Splash" },
            { Codigo: "nT | nSb | nSpl", T: 2, O: 1, S: 2, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nSb | nSpl", T: 3, O: 1, S: 2, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "nO | nSb | nSpl", T: 1, O: 2, S: 2, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Frame Overo | Sabino | Splash" },
            { Codigo: "nT | nO | nSb | nSpl", T: 2, O: 2, S: 2, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nO | nSb | nSpl", T: 3, O: 2, S: 2, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "nSb | nSpl | OO", T: 1, O: 3, S: 2, Sh: 2, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | nSb | nSpl | OO", T: 2, O: 3, S: 2, Sh: 2, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | nSb | nSpl | OO", T: 3, O: 3, S: 2, Sh: 2, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "SbSb | nSpl", T: 1, O: 1, S: 3, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Sabino | Splash" },
            { Codigo: "nT | SbSb | nSpl", T: 2, O: 1, S: 3, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | SbSb | nSpl", T: 3, O: 1, S: 3, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "nO | SbSb | nSpl", T: 1, O: 2, S: 3, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Frame Overo | Sabino | Splash" },
            { Codigo: "nT | nO | SbSb | nSpl", T: 2, O: 2, S: 3, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nO | SbSb | nSpl", T: 3, O: 2, S: 3, Sh: 2, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "SbSb | nSpl | OO", T: 1, O: 3, S: 3, Sh: 2, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | SbSb | nSpl | OO", T: 2, O: 3, S: 3, Sh: 2, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | SbSb | nSpl | OO", T: 3, O: 3, S: 3, Sh: 2, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "SplSpl", T: 1, O: 1, S: 1, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Splash" },
            { Codigo: "nT | SplSpl", T: 2, O: 1, S: 1, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | SplSpl", T: 3, O: 1, S: 1, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "nO | SplSpl", T: 1, O: 2, S: 1, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Frame Overo | Splash" },
            { Codigo: "nT | nO | SplSpl", T: 2, O: 2, S: 1, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nO | SplSpl", T: 3, O: 2, S: 1, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "SplSpl | OO", T: 1, O: 3, S: 1, Sh: 3, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | SplSpl | OO", T: 2, O: 3, S: 1, Sh: 3, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | SplSpl | OO", T: 3, O: 3, S: 1, Sh: 3, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nSb | SplSpl", T: 1, O: 1, S: 2, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Sabino | Splash" },
            { Codigo: "nT | nSb | SplSpl", T: 2, O: 1, S: 2, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nSb | SplSpl", T: 3, O: 1, S: 2, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "nO | nSb | SplSpl", T: 1, O: 2, S: 2, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Frame Overo | Sabino | Splash" },
            { Codigo: "nT | nO | nSb | SplSpl", T: 2, O: 2, S: 2, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nO | nSb | SplSpl", T: 3, O: 2, S: 2, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "nSb | SplSpl | OO", T: 1, O: 3, S: 2, Sh: 3, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | nSb | SplSpl | OO", T: 2, O: 3, S: 2, Sh: 3, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | nSb | SplSpl | OO", T: 3, O: 3, S: 2, Sh: 3, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "SbSb | SplSpl", T: 1, O: 1, S: 3, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Sabino | Splash" },
            { Codigo: "nT | SbSb | SplSpl", T: 2, O: 1, S: 3, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | SbSb | SplSpl", T: 3, O: 1, S: 3, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "nO | SbSb | SplSpl", T: 1, O: 2, S: 3, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Frame Overo | Sabino | Splash" },
            { Codigo: "nT | nO | SbSb | SplSpl", T: 2, O: 2, S: 3, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "TT | nO | SbSb | SplSpl", T: 3, O: 2, S: 3, Sh: 3, Lp: 1, PATN1: 1, Padrao: "Tovero" },
            { Codigo: "SbSb | SplSpl | OO", T: 1, O: 3, S: 3, Sh: 3, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | SbSb | SplSpl | OO", T: 2, O: 3, S: 3, Sh: 3, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | SbSb | SplSpl | OO", T: 3, O: 3, S: 3, Sh: 3, Lp: 1, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nLp", T: 1, O: 1, S: 1, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Appaloosa" },
            { Codigo: "nT | nLp", T: 2, O: 1, S: 1, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nLp", T: 3, O: 1, S: 1, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | nLp", T: 1, O: 2, S: 1, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | nLp", T: 2, O: 2, S: 1, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | nLp", T: 3, O: 2, S: 1, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | nLp", T: 1, O: 3, S: 1, Sh: 1, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | nLp", T: 2, O: 3, S: 1, Sh: 1, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | nLp", T: 3, O: 3, S: 1, Sh: 1, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nSb | nLp", T: 1, O: 1, S: 2, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nSb | nLp", T: 2, O: 1, S: 2, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nSb | nLp", T: 3, O: 1, S: 2, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | nSb | nLp", T: 1, O: 2, S: 2, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | nSb | nLp", T: 2, O: 2, S: 2, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | nSb | nLp", T: 3, O: 2, S: 2, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | nSb | nLp", T: 1, O: 3, S: 2, Sh: 1, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | nLp", T: 2, O: 3, S: 2, Sh: 1, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | nLp", T: 3, O: 3, S: 2, Sh: 1, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "SbSb | nLp", T: 1, O: 1, S: 3, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | SbSb | nLp", T: 2, O: 1, S: 3, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | SbSb | nLp", T: 3, O: 1, S: 3, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | SbSb | nLp", T: 1, O: 2, S: 3, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | SbSb | nLp", T: 2, O: 2, S: 3, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | SbSb | nLp", T: 3, O: 2, S: 3, Sh: 1, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | SbSb | nLp", T: 1, O: 3, S: 3, Sh: 1, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | nLp", T: 2, O: 3, S: 3, Sh: 1, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | nLp", T: 3, O: 3, S: 3, Sh: 1, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nSpl | nLp", T: 1, O: 1, S: 1, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nSpl | nLp", T: 2, O: 1, S: 1, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nSpl | nLp", T: 3, O: 1, S: 1, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | nSpl | nLp", T: 1, O: 2, S: 1, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | nSpl | nLp", T: 2, O: 2, S: 1, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | nSpl | nLp", T: 3, O: 2, S: 1, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | nSpl | nLp", T: 1, O: 3, S: 1, Sh: 2, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSpl | nLp", T: 2, O: 3, S: 1, Sh: 2, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSpl | nLp", T: 3, O: 3, S: 1, Sh: 2, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nSb | nSpl | nLp", T: 1, O: 1, S: 2, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nSb | nSpl | nLp", T: 2, O: 1, S: 2, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nSb | nSpl | nLp", T: 3, O: 1, S: 2, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | nSb | nSpl | nLp", T: 1, O: 2, S: 2, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | nSb | nSpl | nLp", T: 2, O: 2, S: 2, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | nSb | nSpl | nLp", T: 3, O: 2, S: 2, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | nSb | nSpl | nLp", T: 1, O: 3, S: 2, Sh: 2, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | nSpl | nLp", T: 2, O: 3, S: 2, Sh: 2, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | nSpl | nLp", T: 3, O: 3, S: 2, Sh: 2, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "SbSb | nSpl | nLp", T: 1, O: 1, S: 3, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | SbSb | nSpl | nLp", T: 2, O: 1, S: 3, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | SbSb | nSpl | nLp", T: 3, O: 1, S: 3, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | SbSb | nSpl | nLp", T: 1, O: 2, S: 3, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | SbSb | nSpl | nLp", T: 2, O: 2, S: 3, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | SbSb | nSpl | nLp", T: 3, O: 2, S: 3, Sh: 2, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | SbSb | nSpl | nLp", T: 1, O: 3, S: 3, Sh: 2, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | nSpl | nLp", T: 2, O: 3, S: 3, Sh: 2, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | nSpl | nLp", T: 3, O: 3, S: 3, Sh: 2, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "SplSpl | nLp", T: 1, O: 1, S: 1, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | SplSpl | nLp", T: 2, O: 1, S: 1, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | SplSpl | nLp", T: 3, O: 1, S: 1, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | SplSpl | nLp", T: 1, O: 2, S: 1, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | SplSpl | nLp", T: 2, O: 2, S: 1, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | SplSpl | nLp", T: 3, O: 2, S: 1, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | SplSpl | nLp", T: 1, O: 3, S: 1, Sh: 3, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | SplSpl | nLp", T: 2, O: 3, S: 1, Sh: 3, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | SplSpl | nLp", T: 3, O: 3, S: 1, Sh: 3, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nSb | SplSpl | nLp", T: 1, O: 1, S: 2, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nSb | SplSpl | nLp", T: 2, O: 1, S: 2, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nSb | SplSpl | nLp", T: 3, O: 1, S: 2, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | nSb | SplSpl | nLp", T: 1, O: 2, S: 2, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | nSb | SplSpl | nLp", T: 2, O: 2, S: 2, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | nSb | SplSpl | nLp", T: 3, O: 2, S: 2, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | nSb | SplSpl | nLp", T: 1, O: 3, S: 2, Sh: 3, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | SplSpl | nLp", T: 2, O: 3, S: 2, Sh: 3, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | SplSpl | nLp", T: 3, O: 3, S: 2, Sh: 3, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "SbSb | SplSpl | nLp", T: 1, O: 1, S: 3, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | SbSb | SplSpl | nLp", T: 2, O: 1, S: 3, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | SbSb | SplSpl | nLp", T: 3, O: 1, S: 3, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | SbSb | SplSpl | nLp", T: 1, O: 2, S: 3, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | SbSb | SplSpl | nLp", T: 2, O: 2, S: 3, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | SbSb | SplSpl | nLp", T: 3, O: 2, S: 3, Sh: 3, Lp: 2, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | SbSb | SplSpl | nLp", T: 1, O: 3, S: 3, Sh: 3, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | SplSpl | nLp", T: 2, O: 3, S: 3, Sh: 3, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | SplSpl | nLp", T: 3, O: 3, S: 3, Sh: 3, Lp: 2, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "LpLp", T: 1, O: 1, S: 1, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Appaloosa" },
            { Codigo: "nT | LpLp", T: 2, O: 1, S: 1, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | LpLp", T: 3, O: 1, S: 1, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | LpLp", T: 1, O: 2, S: 1, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | LpLp", T: 2, O: 2, S: 1, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | LpLp", T: 3, O: 2, S: 1, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | LpLp", T: 1, O: 3, S: 1, Sh: 1, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | LpLp", T: 2, O: 3, S: 1, Sh: 1, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | LpLp", T: 3, O: 3, S: 1, Sh: 1, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nSb | LpLp", T: 1, O: 1, S: 2, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nSb | LpLp", T: 2, O: 1, S: 2, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nSb | LpLp", T: 3, O: 1, S: 2, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | nSb | LpLp", T: 1, O: 2, S: 2, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | nSb | LpLp", T: 2, O: 2, S: 2, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | nSb | LpLp", T: 3, O: 2, S: 2, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | nSb | LpLp", T: 1, O: 3, S: 2, Sh: 1, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | LpLp", T: 2, O: 3, S: 2, Sh: 1, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | LpLp", T: 3, O: 3, S: 2, Sh: 1, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "SbSb | LpLp", T: 1, O: 1, S: 3, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | SbSb | LpLp", T: 2, O: 1, S: 3, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | SbSb | LpLp", T: 3, O: 1, S: 3, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | SbSb | LpLp", T: 1, O: 2, S: 3, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | SbSb | LpLp", T: 2, O: 2, S: 3, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | SbSb | LpLp", T: 3, O: 2, S: 3, Sh: 1, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | SbSb | LpLp", T: 1, O: 3, S: 3, Sh: 1, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | LpLp", T: 2, O: 3, S: 3, Sh: 1, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | LpLp", T: 3, O: 3, S: 3, Sh: 1, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nSpl | LpLp", T: 1, O: 1, S: 1, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nSpl | LpLp", T: 2, O: 1, S: 1, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nSpl | LpLp", T: 3, O: 1, S: 1, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | nSpl | LpLp", T: 1, O: 2, S: 1, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | nSpl | LpLp", T: 2, O: 2, S: 1, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | nSpl | LpLp", T: 3, O: 2, S: 1, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | nSpl | LpLp", T: 1, O: 3, S: 1, Sh: 2, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSpl | LpLp", T: 2, O: 3, S: 1, Sh: 2, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSpl | LpLp", T: 3, O: 3, S: 1, Sh: 2, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nSb | nSpl | LpLp", T: 1, O: 1, S: 2, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nSb | nSpl | LpLp", T: 2, O: 1, S: 2, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nSb | nSpl | LpLp", T: 3, O: 1, S: 2, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | nSb | nSpl | LpLp", T: 1, O: 2, S: 2, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | nSb | nSpl | LpLp", T: 2, O: 2, S: 2, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | nSb | nSpl | LpLp", T: 3, O: 2, S: 2, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | nSb | nSpl | LpLp", T: 1, O: 3, S: 2, Sh: 2, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | nSpl | LpLp", T: 2, O: 3, S: 2, Sh: 2, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | nSpl | LpLp", T: 3, O: 3, S: 2, Sh: 2, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "SbSb | nSpl | LpLp", T: 1, O: 1, S: 3, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | SbSb | nSpl | LpLp", T: 2, O: 1, S: 3, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | SbSb | nSpl | LpLp", T: 3, O: 1, S: 3, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | SbSb | nSpl | LpLp", T: 1, O: 2, S: 3, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | SbSb | nSpl | LpLp", T: 2, O: 2, S: 3, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | SbSb | nSpl | LpLp", T: 3, O: 2, S: 3, Sh: 2, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | SbSb | nSpl | LpLp", T: 1, O: 3, S: 3, Sh: 2, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | nSpl | LpLp", T: 2, O: 3, S: 3, Sh: 2, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | nSpl | LpLp", T: 3, O: 3, S: 3, Sh: 2, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "SplSpl | LpLp", T: 1, O: 1, S: 1, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | SplSpl | LpLp", T: 2, O: 1, S: 1, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | SplSpl | LpLp", T: 3, O: 1, S: 1, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | SplSpl | LpLp", T: 1, O: 2, S: 1, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | SplSpl | LpLp", T: 2, O: 2, S: 1, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | SplSpl | LpLp", T: 3, O: 2, S: 1, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | SplSpl | LpLp", T: 1, O: 3, S: 1, Sh: 3, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | SplSpl | LpLp", T: 2, O: 3, S: 1, Sh: 3, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | SplSpl | LpLp", T: 3, O: 3, S: 1, Sh: 3, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nSb | SplSpl | LpLp", T: 1, O: 1, S: 2, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nSb | SplSpl | LpLp", T: 2, O: 1, S: 2, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nSb | SplSpl | LpLp", T: 3, O: 1, S: 2, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | nSb | SplSpl | LpLp", T: 1, O: 2, S: 2, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | nSb | SplSpl | LpLp", T: 2, O: 2, S: 2, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | nSb | SplSpl | LpLp", T: 3, O: 2, S: 2, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | nSb | SplSpl | LpLp", T: 1, O: 3, S: 2, Sh: 3, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | SplSpl | LpLp", T: 2, O: 3, S: 2, Sh: 3, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | SplSpl | LpLp", T: 3, O: 3, S: 2, Sh: 3, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "SbSb | SplSpl | LpLp", T: 1, O: 1, S: 3, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | SbSb | SplSpl | LpLp", T: 2, O: 1, S: 3, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | SbSb | SplSpl | LpLp", T: 3, O: 1, S: 3, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nO | SbSb | SplSpl | LpLp", T: 1, O: 2, S: 3, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "nT | nO | SbSb | SplSpl | LpLp", T: 2, O: 2, S: 3, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "TT | nO | SbSb | SplSpl | LpLp", T: 3, O: 2, S: 3, Sh: 3, Lp: 3, PATN1: 1, Padrao: "Pintaloosa" },
            { Codigo: "OO | SbSb | SplSpl | LpLp", T: 1, O: 3, S: 3, Sh: 3, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | SplSpl | LpLp", T: 2, O: 3, S: 3, Sh: 3, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | SplSpl | LpLp", T: 3, O: 3, S: 3, Sh: 3, Lp: 3, PATN1: 1, Padrao: "LETAL" },
            { Codigo: null, T: 1, O: 1, S: 1, Sh: 1, Lp: 1, PATN1: 2, Padrao: null },
            { Codigo: "nT | nPATN1", T: 2, O: 1, S: 1, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Tobiano" },
            { Codigo: "TT | nPATN1", T: 3, O: 1, S: 1, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Tobiano" },
            { Codigo: "nO | nPATN1", T: 1, O: 2, S: 1, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Frame Overo" },
            { Codigo: "nT | nO | nPATN1", T: 2, O: 2, S: 1, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nO | nPATN1", T: 3, O: 2, S: 1, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "OO | nPATN1", T: 1, O: 3, S: 1, Sh: 1, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | nPATN1", T: 2, O: 3, S: 1, Sh: 1, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | nPATN1", T: 3, O: 3, S: 1, Sh: 1, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nSb | nPATN1", T: 1, O: 1, S: 2, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Sabino" },
            { Codigo: "nT | nSb | nPATN1", T: 2, O: 1, S: 2, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nSb | nPATN1", T: 3, O: 1, S: 2, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "nO | nSb | nPATN1", T: 1, O: 2, S: 2, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Frame Overo | Sabino" },
            { Codigo: "nT | nO | nSb | nPATN1", T: 2, O: 2, S: 2, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nO | nSb | nPATN1", T: 3, O: 2, S: 2, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "nSb | OO | nPATN1", T: 1, O: 3, S: 2, Sh: 1, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | nSb | OO | nPATN1", T: 2, O: 3, S: 2, Sh: 1, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | nSb | OO | nPATN1", T: 3, O: 3, S: 2, Sh: 1, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "SbSb | nPATN1", T: 1, O: 1, S: 3, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Sabino" },
            { Codigo: "nT | SbSb | nPATN1", T: 2, O: 1, S: 3, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | SbSb | nPATN1", T: 3, O: 1, S: 3, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "nO | SbSb | nPATN1", T: 1, O: 2, S: 3, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Frame Overo | Sabino" },
            { Codigo: "nT | nO | SbSb | nPATN1", T: 2, O: 2, S: 3, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nO | SbSb | nPATN1", T: 3, O: 2, S: 3, Sh: 1, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "SbSb | OO | nPATN1", T: 1, O: 3, S: 3, Sh: 1, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | SbSb | OO | nPATN1", T: 2, O: 3, S: 3, Sh: 1, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | SbSb | OO | nPATN1", T: 3, O: 3, S: 3, Sh: 1, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nSpl | nPATN1", T: 1, O: 1, S: 1, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Splash" },
            { Codigo: "nT | nSpl | nPATN1", T: 2, O: 1, S: 1, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nSpl | nPATN1", T: 3, O: 1, S: 1, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "nO | nSpl | nPATN1", T: 1, O: 2, S: 1, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Frame Overo | Splash" },
            { Codigo: "nT | nO | nSpl | nPATN1", T: 2, O: 2, S: 1, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nO | nSpl | nPATN1", T: 3, O: 2, S: 1, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "nSpl | OO | nPATN1", T: 1, O: 3, S: 1, Sh: 2, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | nSpl | OO | nPATN1", T: 2, O: 3, S: 1, Sh: 2, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | nSpl | OO | nPATN1", T: 3, O: 3, S: 1, Sh: 2, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nSb | nSpl | nPATN1", T: 1, O: 1, S: 2, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Sabino | Splash" },
            { Codigo: "nT | nSb | nSpl | nPATN1", T: 2, O: 1, S: 2, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nSb | nSpl | nPATN1", T: 3, O: 1, S: 2, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "nO | nSb | nSpl | nPATN1", T: 1, O: 2, S: 2, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Frame Overo | Sabino | Splash" },
            { Codigo: "nT | nO | nSb | nSpl | nPATN1", T: 2, O: 2, S: 2, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nO | nSb | nSpl | nPATN1", T: 3, O: 2, S: 2, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "nSb | nSpl | OO | nPATN1", T: 1, O: 3, S: 2, Sh: 2, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | nSb | nSpl | OO | nPATN1", T: 2, O: 3, S: 2, Sh: 2, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | nSb | nSpl | OO | nPATN1", T: 3, O: 3, S: 2, Sh: 2, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "SbSb | nSpl | nPATN1", T: 1, O: 1, S: 3, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Sabino | Splash" },
            { Codigo: "nT | SbSb | nSpl | nPATN1", T: 2, O: 1, S: 3, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | SbSb | nSpl | nPATN1", T: 3, O: 1, S: 3, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "nO | SbSb | nSpl | nPATN1", T: 1, O: 2, S: 3, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Frame Overo | Sabino | Splash" },
            { Codigo: "nT | nO | SbSb | nSpl | nPATN1", T: 2, O: 2, S: 3, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nO | SbSb | nSpl | nPATN1", T: 3, O: 2, S: 3, Sh: 2, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "SbSb | nSpl | OO | nPATN1", T: 1, O: 3, S: 3, Sh: 2, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | SbSb | nSpl | OO | nPATN1", T: 2, O: 3, S: 3, Sh: 2, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | SbSb | nSpl | OO | nPATN1", T: 3, O: 3, S: 3, Sh: 2, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "SplSpl | nPATN1", T: 1, O: 1, S: 1, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Splash" },
            { Codigo: "nT | SplSpl | nPATN1", T: 2, O: 1, S: 1, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | SplSpl | nPATN1", T: 3, O: 1, S: 1, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "nO | SplSpl | nPATN1", T: 1, O: 2, S: 1, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Frame Overo | Splash" },
            { Codigo: "nT | nO | SplSpl | nPATN1", T: 2, O: 2, S: 1, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nO | SplSpl | nPATN1", T: 3, O: 2, S: 1, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "SplSpl | OO | nPATN1", T: 1, O: 3, S: 1, Sh: 3, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | SplSpl | OO | nPATN1", T: 2, O: 3, S: 1, Sh: 3, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | SplSpl | OO | nPATN1", T: 3, O: 3, S: 1, Sh: 3, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nSb | SplSpl | nPATN1", T: 1, O: 1, S: 2, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Sabino | Splash" },
            { Codigo: "nT | nSb | SplSpl | nPATN1", T: 2, O: 1, S: 2, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nSb | SplSpl | nPATN1", T: 3, O: 1, S: 2, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "nO | nSb | SplSpl | nPATN1", T: 1, O: 2, S: 2, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Frame Overo | Sabino | Splash" },
            { Codigo: "nT | nO | nSb | SplSpl | nPATN1", T: 2, O: 2, S: 2, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nO | nSb | SplSpl | nPATN1", T: 3, O: 2, S: 2, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "nSb | SplSpl | OO | nPATN1", T: 1, O: 3, S: 2, Sh: 3, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | nSb | SplSpl | OO | nPATN1", T: 2, O: 3, S: 2, Sh: 3, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | nSb | SplSpl | OO | nPATN1", T: 3, O: 3, S: 2, Sh: 3, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "SbSb | SplSpl | nPATN1", T: 1, O: 1, S: 3, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Sabino | Splash" },
            { Codigo: "nT | SbSb | SplSpl | nPATN1", T: 2, O: 1, S: 3, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | SbSb | SplSpl | nPATN1", T: 3, O: 1, S: 3, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "nO | SbSb | SplSpl | nPATN1", T: 1, O: 2, S: 3, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Frame Overo | Sabino | Splash" },
            { Codigo: "nT | nO | SbSb | SplSpl | nPATN1", T: 2, O: 2, S: 3, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "TT | nO | SbSb | SplSpl | nPATN1", T: 3, O: 2, S: 3, Sh: 3, Lp: 1, PATN1: 2, Padrao: "Tovero" },
            { Codigo: "SbSb | SplSpl | OO | nPATN1", T: 1, O: 3, S: 3, Sh: 3, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | SbSb | SplSpl | OO | nPATN1", T: 2, O: 3, S: 3, Sh: 3, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | SbSb | SplSpl | OO | nPATN1", T: 3, O: 3, S: 3, Sh: 3, Lp: 1, PATN1: 2, Padrao: "LETAL" },
            { Codigo: null, T: 1, O: 1, S: 1, Sh: 1, Lp: 1, PATN1: 3, Padrao: null },
            { Codigo: "nT | PATN1PATN1", T: 2, O: 1, S: 1, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Tobiano" },
            { Codigo: "TT | PATN1PATN1", T: 3, O: 1, S: 1, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Tobiano" },
            { Codigo: "nO | PATN1PATN1", T: 1, O: 2, S: 1, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Frame Overo" },
            { Codigo: "nT | nO | PATN1PATN1", T: 2, O: 2, S: 1, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nO | PATN1PATN1", T: 3, O: 2, S: 1, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "OO | PATN1PATN1", T: 1, O: 3, S: 1, Sh: 1, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | PATN1PATN1", T: 2, O: 3, S: 1, Sh: 1, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | PATN1PATN1", T: 3, O: 3, S: 1, Sh: 1, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nSb | PATN1PATN1", T: 1, O: 1, S: 2, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Sabino" },
            { Codigo: "nT | nSb | PATN1PATN1", T: 2, O: 1, S: 2, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nSb | PATN1PATN1", T: 3, O: 1, S: 2, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "nO | nSb | PATN1PATN1", T: 1, O: 2, S: 2, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Frame Overo | Sabino" },
            { Codigo: "nT | nO | nSb | PATN1PATN1", T: 2, O: 2, S: 2, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nO | nSb | PATN1PATN1", T: 3, O: 2, S: 2, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "nSb | OO | PATN1PATN1", T: 1, O: 3, S: 2, Sh: 1, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | nSb | OO | PATN1PATN1", T: 2, O: 3, S: 2, Sh: 1, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | nSb | OO | PATN1PATN1", T: 3, O: 3, S: 2, Sh: 1, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "SbSb | PATN1PATN1", T: 1, O: 1, S: 3, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Sabino" },
            { Codigo: "nT | SbSb | PATN1PATN1", T: 2, O: 1, S: 3, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | SbSb | PATN1PATN1", T: 3, O: 1, S: 3, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "nO | SbSb | PATN1PATN1", T: 1, O: 2, S: 3, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Frame Overo | Sabino" },
            { Codigo: "nT | nO | SbSb | PATN1PATN1", T: 2, O: 2, S: 3, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nO | SbSb | PATN1PATN1", T: 3, O: 2, S: 3, Sh: 1, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "SbSb | OO | PATN1PATN1", T: 1, O: 3, S: 3, Sh: 1, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | SbSb | OO | PATN1PATN1", T: 2, O: 3, S: 3, Sh: 1, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | SbSb | OO | PATN1PATN1", T: 3, O: 3, S: 3, Sh: 1, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nSpl | PATN1PATN1", T: 1, O: 1, S: 1, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Splash" },
            { Codigo: "nT | nSpl | PATN1PATN1", T: 2, O: 1, S: 1, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nSpl | PATN1PATN1", T: 3, O: 1, S: 1, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "nO | nSpl | PATN1PATN1", T: 1, O: 2, S: 1, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Frame Overo | Splash" },
            { Codigo: "nT | nO | nSpl | PATN1PATN1", T: 2, O: 2, S: 1, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nO | nSpl | PATN1PATN1", T: 3, O: 2, S: 1, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "nSpl | OO | PATN1PATN1", T: 1, O: 3, S: 1, Sh: 2, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | nSpl | OO | PATN1PATN1", T: 2, O: 3, S: 1, Sh: 2, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | nSpl | OO | PATN1PATN1", T: 3, O: 3, S: 1, Sh: 2, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nSb | nSpl | PATN1PATN1", T: 1, O: 1, S: 2, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Sabino | Splash" },
            { Codigo: "nT | nSb | nSpl | PATN1PATN1", T: 2, O: 1, S: 2, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nSb | nSpl | PATN1PATN1", T: 3, O: 1, S: 2, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "nO | nSb | nSpl | PATN1PATN1", T: 1, O: 2, S: 2, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Frame Overo | Sabino | Splash" },
            { Codigo: "nT | nO | nSb | nSpl | PATN1PATN1", T: 2, O: 2, S: 2, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nO | nSb | nSpl | PATN1PATN1", T: 3, O: 2, S: 2, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "nSb | nSpl | OO | PATN1PATN1", T: 1, O: 3, S: 2, Sh: 2, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | nSb | nSpl | OO | PATN1PATN1", T: 2, O: 3, S: 2, Sh: 2, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | nSb | nSpl | OO | PATN1PATN1", T: 3, O: 3, S: 2, Sh: 2, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "SbSb | nSpl | PATN1PATN1", T: 1, O: 1, S: 3, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Sabino | Splash" },
            { Codigo: "nT | SbSb | nSpl | PATN1PATN1", T: 2, O: 1, S: 3, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | SbSb | nSpl | PATN1PATN1", T: 3, O: 1, S: 3, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "nO | SbSb | nSpl | PATN1PATN1", T: 1, O: 2, S: 3, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Frame Overo | Sabino | Splash" },
            { Codigo: "nT | nO | SbSb | nSpl | PATN1PATN1", T: 2, O: 2, S: 3, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nO | SbSb | nSpl | PATN1PATN1", T: 3, O: 2, S: 3, Sh: 2, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "SbSb | nSpl | OO | PATN1PATN1", T: 1, O: 3, S: 3, Sh: 2, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | SbSb | nSpl | OO | PATN1PATN1", T: 2, O: 3, S: 3, Sh: 2, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | SbSb | nSpl | OO | PATN1PATN1", T: 3, O: 3, S: 3, Sh: 2, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "SplSpl | PATN1PATN1", T: 1, O: 1, S: 1, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Splash" },
            { Codigo: "nT | SplSpl | PATN1PATN1", T: 2, O: 1, S: 1, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | SplSpl | PATN1PATN1", T: 3, O: 1, S: 1, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "nO | SplSpl | PATN1PATN1", T: 1, O: 2, S: 1, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Frame Overo | Splash" },
            { Codigo: "nT | nO | SplSpl | PATN1PATN1", T: 2, O: 2, S: 1, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nO | SplSpl | PATN1PATN1", T: 3, O: 2, S: 1, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "SplSpl | OO | PATN1PATN1", T: 1, O: 3, S: 1, Sh: 3, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | SplSpl | OO | PATN1PATN1", T: 2, O: 3, S: 1, Sh: 3, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | SplSpl | OO | PATN1PATN1", T: 3, O: 3, S: 1, Sh: 3, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nSb | SplSpl | PATN1PATN1", T: 1, O: 1, S: 2, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Sabino | Splash" },
            { Codigo: "nT | nSb | SplSpl | PATN1PATN1", T: 2, O: 1, S: 2, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nSb | SplSpl | PATN1PATN1", T: 3, O: 1, S: 2, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "nO | nSb | SplSpl | PATN1PATN1", T: 1, O: 2, S: 2, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Frame Overo | Sabino | Splash" },
            { Codigo: "nT | nO | nSb | SplSpl | PATN1PATN1", T: 2, O: 2, S: 2, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nO | nSb | SplSpl | PATN1PATN1", T: 3, O: 2, S: 2, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "nSb | SplSpl | OO | PATN1PATN1", T: 1, O: 3, S: 2, Sh: 3, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | nSb | SplSpl | OO | PATN1PATN1", T: 2, O: 3, S: 2, Sh: 3, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | nSb | SplSpl | OO | PATN1PATN1", T: 3, O: 3, S: 2, Sh: 3, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "SbSb | SplSpl | PATN1PATN1", T: 1, O: 1, S: 3, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Sabino | Splash" },
            { Codigo: "nT | SbSb | SplSpl | PATN1PATN1", T: 2, O: 1, S: 3, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | SbSb | SplSpl | PATN1PATN1", T: 3, O: 1, S: 3, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "nO | SbSb | SplSpl | PATN1PATN1", T: 1, O: 2, S: 3, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Frame Overo | Sabino | Splash" },
            { Codigo: "nT | nO | SbSb | SplSpl | PATN1PATN1", T: 2, O: 2, S: 3, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "TT | nO | SbSb | SplSpl | PATN1PATN1", T: 3, O: 2, S: 3, Sh: 3, Lp: 1, PATN1: 3, Padrao: "Tovero" },
            { Codigo: "SbSb | SplSpl | OO | PATN1PATN1", T: 1, O: 3, S: 3, Sh: 3, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | SbSb | SplSpl | OO | PATN1PATN1", T: 2, O: 3, S: 3, Sh: 3, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | SbSb | SplSpl | OO | PATN1PATN1", T: 3, O: 3, S: 3, Sh: 3, Lp: 1, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nLp | nPATN1", T: 1, O: 1, S: 1, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Appaloosa com Pattern-1" },
            { Codigo: "nT | nLp | nPATN1", T: 2, O: 1, S: 1, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nLp | nPATN1", T: 3, O: 1, S: 1, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nLp | nPATN1", T: 1, O: 2, S: 1, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nLp | nPATN1", T: 2, O: 2, S: 1, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nLp | nPATN1", T: 3, O: 2, S: 1, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nLp | nPATN1", T: 1, O: 3, S: 1, Sh: 1, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | nLp | nPATN1", T: 2, O: 3, S: 1, Sh: 1, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | nLp | nPATN1", T: 3, O: 3, S: 1, Sh: 1, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nSb | nLp | nPATN1", T: 1, O: 1, S: 2, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSb | nLp | nPATN1", T: 2, O: 1, S: 2, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSb | nLp | nPATN1", T: 3, O: 1, S: 2, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSb | nLp | nPATN1", T: 1, O: 2, S: 2, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSb | nLp | nPATN1", T: 2, O: 2, S: 2, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSb | nLp | nPATN1", T: 3, O: 2, S: 2, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSb | nLp | nPATN1", T: 1, O: 3, S: 2, Sh: 1, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | nLp | nPATN1", T: 2, O: 3, S: 2, Sh: 1, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | nLp | nPATN1", T: 3, O: 3, S: 2, Sh: 1, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "SbSb | nLp | nPATN1", T: 1, O: 1, S: 3, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SbSb | nLp | nPATN1", T: 2, O: 1, S: 3, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SbSb | nLp | nPATN1", T: 3, O: 1, S: 3, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SbSb | nLp | nPATN1", T: 1, O: 2, S: 3, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SbSb | nLp | nPATN1", T: 2, O: 2, S: 3, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SbSb | nLp | nPATN1", T: 3, O: 2, S: 3, Sh: 1, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SbSb | nLp | nPATN1", T: 1, O: 3, S: 3, Sh: 1, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | nLp | nPATN1", T: 2, O: 3, S: 3, Sh: 1, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | nLp | nPATN1", T: 3, O: 3, S: 3, Sh: 1, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nSpl | nLp | nPATN1", T: 1, O: 1, S: 1, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSpl | nLp | nPATN1", T: 2, O: 1, S: 1, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSpl | nLp | nPATN1", T: 3, O: 1, S: 1, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSpl | nLp | nPATN1", T: 1, O: 2, S: 1, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSpl | nLp | nPATN1", T: 2, O: 2, S: 1, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSpl | nLp | nPATN1", T: 3, O: 2, S: 1, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSpl | nLp | nPATN1", T: 1, O: 3, S: 1, Sh: 2, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSpl | nLp | nPATN1", T: 2, O: 3, S: 1, Sh: 2, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSpl | nLp | nPATN1", T: 3, O: 3, S: 1, Sh: 2, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nSb | nSpl | nLp | nPATN1", T: 1, O: 1, S: 2, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSb | nSpl | nLp | nPATN1", T: 2, O: 1, S: 2, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSb | nSpl | nLp | nPATN1", T: 3, O: 1, S: 2, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSb | nSpl | nLp | nPATN1", T: 1, O: 2, S: 2, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSb | nSpl | nLp | nPATN1", T: 2, O: 2, S: 2, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSb | nSpl | nLp | nPATN1", T: 3, O: 2, S: 2, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSb | nSpl | nLp | nPATN1", T: 1, O: 3, S: 2, Sh: 2, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | nSpl | nLp | nPATN1", T: 2, O: 3, S: 2, Sh: 2, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | nSpl | nLp | nPATN1", T: 3, O: 3, S: 2, Sh: 2, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "SbSb | nSpl | nLp | nPATN1", T: 1, O: 1, S: 3, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SbSb | nSpl | nLp | nPATN1", T: 2, O: 1, S: 3, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SbSb | nSpl | nLp | nPATN1", T: 3, O: 1, S: 3, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SbSb | nSpl | nLp | nPATN1", T: 1, O: 2, S: 3, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SbSb | nSpl | nLp | nPATN1", T: 2, O: 2, S: 3, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SbSb | nSpl | nLp | nPATN1", T: 3, O: 2, S: 3, Sh: 2, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SbSb | nSpl | nLp | nPATN1", T: 1, O: 3, S: 3, Sh: 2, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | nSpl | nLp | nPATN1", T: 2, O: 3, S: 3, Sh: 2, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | nSpl | nLp | nPATN1", T: 3, O: 3, S: 3, Sh: 2, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "SplSpl | nLp | nPATN1", T: 1, O: 1, S: 1, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SplSpl | nLp | nPATN1", T: 2, O: 1, S: 1, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SplSpl | nLp | nPATN1", T: 3, O: 1, S: 1, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SplSpl | nLp | nPATN1", T: 1, O: 2, S: 1, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SplSpl | nLp | nPATN1", T: 2, O: 2, S: 1, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SplSpl | nLp | nPATN1", T: 3, O: 2, S: 1, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SplSpl | nLp | nPATN1", T: 1, O: 3, S: 1, Sh: 3, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | SplSpl | nLp | nPATN1", T: 2, O: 3, S: 1, Sh: 3, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | SplSpl | nLp | nPATN1", T: 3, O: 3, S: 1, Sh: 3, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nSb | SplSpl | nLp | nPATN1", T: 1, O: 1, S: 2, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSb | SplSpl | nLp | nPATN1", T: 2, O: 1, S: 2, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSb | SplSpl | nLp | nPATN1", T: 3, O: 1, S: 2, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSb | SplSpl | nLp | nPATN1", T: 1, O: 2, S: 2, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSb | SplSpl | nLp | nPATN1", T: 2, O: 2, S: 2, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSb | SplSpl | nLp | nPATN1", T: 3, O: 2, S: 2, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSb | SplSpl | nLp | nPATN1", T: 1, O: 3, S: 2, Sh: 3, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | SplSpl | nLp | nPATN1", T: 2, O: 3, S: 2, Sh: 3, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | SplSpl | nLp | nPATN1", T: 3, O: 3, S: 2, Sh: 3, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "SbSb | SplSpl | nLp | nPATN1", T: 1, O: 1, S: 3, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SbSb | SplSpl | nLp | nPATN1", T: 2, O: 1, S: 3, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SbSb | SplSpl | nLp | nPATN1", T: 3, O: 1, S: 3, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SbSb | SplSpl | nLp | nPATN1", T: 1, O: 2, S: 3, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SbSb | SplSpl | nLp | nPATN1", T: 2, O: 2, S: 3, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SbSb | SplSpl | nLp | nPATN1", T: 3, O: 2, S: 3, Sh: 3, Lp: 2, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SbSb | SplSpl | nLp | nPATN1", T: 1, O: 3, S: 3, Sh: 3, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | SplSpl | nLp | nPATN1", T: 2, O: 3, S: 3, Sh: 3, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | SplSpl | nLp | nPATN1", T: 3, O: 3, S: 3, Sh: 3, Lp: 2, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "LpLp | nPATN1", T: 1, O: 1, S: 1, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Appaloosa com Pattern-1" },
            { Codigo: "nT | LpLp | nPATN1", T: 2, O: 1, S: 1, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | LpLp | nPATN1", T: 3, O: 1, S: 1, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | LpLp | nPATN1", T: 1, O: 2, S: 1, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | LpLp | nPATN1", T: 2, O: 2, S: 1, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | LpLp | nPATN1", T: 3, O: 2, S: 1, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | LpLp | nPATN1", T: 1, O: 3, S: 1, Sh: 1, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | LpLp | nPATN1", T: 2, O: 3, S: 1, Sh: 1, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | LpLp | nPATN1", T: 3, O: 3, S: 1, Sh: 1, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nSb | LpLp | nPATN1", T: 1, O: 1, S: 2, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSb | LpLp | nPATN1", T: 2, O: 1, S: 2, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSb | LpLp | nPATN1", T: 3, O: 1, S: 2, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSb | LpLp | nPATN1", T: 1, O: 2, S: 2, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSb | LpLp | nPATN1", T: 2, O: 2, S: 2, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSb | LpLp | nPATN1", T: 3, O: 2, S: 2, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSb | LpLp | nPATN1", T: 1, O: 3, S: 2, Sh: 1, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | LpLp | nPATN1", T: 2, O: 3, S: 2, Sh: 1, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | LpLp | nPATN1", T: 3, O: 3, S: 2, Sh: 1, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "SbSb | LpLp | nPATN1", T: 1, O: 1, S: 3, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SbSb | LpLp | nPATN1", T: 2, O: 1, S: 3, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SbSb | LpLp | nPATN1", T: 3, O: 1, S: 3, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SbSb | LpLp | nPATN1", T: 1, O: 2, S: 3, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SbSb | LpLp | nPATN1", T: 2, O: 2, S: 3, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SbSb | LpLp | nPATN1", T: 3, O: 2, S: 3, Sh: 1, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SbSb | LpLp | nPATN1", T: 1, O: 3, S: 3, Sh: 1, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | LpLp | nPATN1", T: 2, O: 3, S: 3, Sh: 1, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | LpLp | nPATN1", T: 3, O: 3, S: 3, Sh: 1, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nSpl | LpLp | nPATN1", T: 1, O: 1, S: 1, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSpl | LpLp | nPATN1", T: 2, O: 1, S: 1, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSpl | LpLp | nPATN1", T: 3, O: 1, S: 1, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSpl | LpLp | nPATN1", T: 1, O: 2, S: 1, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSpl | LpLp | nPATN1", T: 2, O: 2, S: 1, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSpl | LpLp | nPATN1", T: 3, O: 2, S: 1, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSpl | LpLp | nPATN1", T: 1, O: 3, S: 1, Sh: 2, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSpl | LpLp | nPATN1", T: 2, O: 3, S: 1, Sh: 2, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSpl | LpLp | nPATN1", T: 3, O: 3, S: 1, Sh: 2, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nSb | nSpl | LpLp | nPATN1", T: 1, O: 1, S: 2, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSb | nSpl | LpLp | nPATN1", T: 2, O: 1, S: 2, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSb | nSpl | LpLp | nPATN1", T: 3, O: 1, S: 2, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSb | nSpl | LpLp | nPATN1", T: 1, O: 2, S: 2, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSb | nSpl | LpLp | nPATN1", T: 2, O: 2, S: 2, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSb | nSpl | LpLp | nPATN1", T: 3, O: 2, S: 2, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSb | nSpl | LpLp | nPATN1", T: 1, O: 3, S: 2, Sh: 2, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | nSpl | LpLp | nPATN1", T: 2, O: 3, S: 2, Sh: 2, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | nSpl | LpLp | nPATN1", T: 3, O: 3, S: 2, Sh: 2, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "SbSb | nSpl | LpLp | nPATN1", T: 1, O: 1, S: 3, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SbSb | nSpl | LpLp | nPATN1", T: 2, O: 1, S: 3, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SbSb | nSpl | LpLp | nPATN1", T: 3, O: 1, S: 3, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SbSb | nSpl | LpLp | nPATN1", T: 1, O: 2, S: 3, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SbSb | nSpl | LpLp | nPATN1", T: 2, O: 2, S: 3, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SbSb | nSpl | LpLp | nPATN1", T: 3, O: 2, S: 3, Sh: 2, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SbSb | nSpl | LpLp | nPATN1", T: 1, O: 3, S: 3, Sh: 2, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | nSpl | LpLp | nPATN1", T: 2, O: 3, S: 3, Sh: 2, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | nSpl | LpLp | nPATN1", T: 3, O: 3, S: 3, Sh: 2, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "SplSpl | LpLp | nPATN1", T: 1, O: 1, S: 1, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SplSpl | LpLp | nPATN1", T: 2, O: 1, S: 1, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SplSpl | LpLp | nPATN1", T: 3, O: 1, S: 1, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SplSpl | LpLp | nPATN1", T: 1, O: 2, S: 1, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SplSpl | LpLp | nPATN1", T: 2, O: 2, S: 1, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SplSpl | LpLp | nPATN1", T: 3, O: 2, S: 1, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SplSpl | LpLp | nPATN1", T: 1, O: 3, S: 1, Sh: 3, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | SplSpl | LpLp | nPATN1", T: 2, O: 3, S: 1, Sh: 3, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | SplSpl | LpLp | nPATN1", T: 3, O: 3, S: 1, Sh: 3, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nSb | SplSpl | LpLp | nPATN1", T: 1, O: 1, S: 2, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSb | SplSpl | LpLp | nPATN1", T: 2, O: 1, S: 2, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSb | SplSpl | LpLp | nPATN1", T: 3, O: 1, S: 2, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSb | SplSpl | LpLp | nPATN1", T: 1, O: 2, S: 2, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSb | SplSpl | LpLp | nPATN1", T: 2, O: 2, S: 2, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSb | SplSpl | LpLp | nPATN1", T: 3, O: 2, S: 2, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSb | SplSpl | LpLp | nPATN1", T: 1, O: 3, S: 2, Sh: 3, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | SplSpl | LpLp | nPATN1", T: 2, O: 3, S: 2, Sh: 3, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | SplSpl | LpLp | nPATN1", T: 3, O: 3, S: 2, Sh: 3, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "SbSb | SplSpl | LpLp | nPATN1", T: 1, O: 1, S: 3, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SbSb | SplSpl | LpLp | nPATN1", T: 2, O: 1, S: 3, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SbSb | SplSpl | LpLp | nPATN1", T: 3, O: 1, S: 3, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SbSb | SplSpl | LpLp | nPATN1", T: 1, O: 2, S: 3, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SbSb | SplSpl | LpLp | nPATN1", T: 2, O: 2, S: 3, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SbSb | SplSpl | LpLp | nPATN1", T: 3, O: 2, S: 3, Sh: 3, Lp: 3, PATN1: 2, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SbSb | SplSpl | LpLp | nPATN1", T: 1, O: 3, S: 3, Sh: 3, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | SplSpl | LpLp | nPATN1", T: 2, O: 3, S: 3, Sh: 3, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | SplSpl | LpLp | nPATN1", T: 3, O: 3, S: 3, Sh: 3, Lp: 3, PATN1: 2, Padrao: "LETAL" },
            { Codigo: "nLp | PATN1PATN1", T: 1, O: 1, S: 1, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Appaloosa com Pattern-1" },
            { Codigo: "nT | nLp | PATN1PATN1", T: 2, O: 1, S: 1, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nLp | PATN1PATN1", T: 3, O: 1, S: 1, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nLp | PATN1PATN1", T: 1, O: 2, S: 1, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nLp | PATN1PATN1", T: 2, O: 2, S: 1, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nLp | PATN1PATN1", T: 3, O: 2, S: 1, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nLp | PATN1PATN1", T: 1, O: 3, S: 1, Sh: 1, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | nLp | PATN1PATN1", T: 2, O: 3, S: 1, Sh: 1, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | nLp | PATN1PATN1", T: 3, O: 3, S: 1, Sh: 1, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nSb | nLp | PATN1PATN1", T: 1, O: 1, S: 2, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSb | nLp | PATN1PATN1", T: 2, O: 1, S: 2, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSb | nLp | PATN1PATN1", T: 3, O: 1, S: 2, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSb | nLp | PATN1PATN1", T: 1, O: 2, S: 2, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSb | nLp | PATN1PATN1", T: 2, O: 2, S: 2, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSb | nLp | PATN1PATN1", T: 3, O: 2, S: 2, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSb | nLp | PATN1PATN1", T: 1, O: 3, S: 2, Sh: 1, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | nLp | PATN1PATN1", T: 2, O: 3, S: 2, Sh: 1, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | nLp | PATN1PATN1", T: 3, O: 3, S: 2, Sh: 1, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "SbSb | nLp | PATN1PATN1", T: 1, O: 1, S: 3, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SbSb | nLp | PATN1PATN1", T: 2, O: 1, S: 3, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SbSb | nLp | PATN1PATN1", T: 3, O: 1, S: 3, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SbSb | nLp | PATN1PATN1", T: 1, O: 2, S: 3, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SbSb | nLp | PATN1PATN1", T: 2, O: 2, S: 3, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SbSb | nLp | PATN1PATN1", T: 3, O: 2, S: 3, Sh: 1, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SbSb | nLp | PATN1PATN1", T: 1, O: 3, S: 3, Sh: 1, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | nLp | PATN1PATN1", T: 2, O: 3, S: 3, Sh: 1, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | nLp | PATN1PATN1", T: 3, O: 3, S: 3, Sh: 1, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nSpl | nLp | PATN1PATN1", T: 1, O: 1, S: 1, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSpl | nLp | PATN1PATN1", T: 2, O: 1, S: 1, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSpl | nLp | PATN1PATN1", T: 3, O: 1, S: 1, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSpl | nLp | PATN1PATN1", T: 1, O: 2, S: 1, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSpl | nLp | PATN1PATN1", T: 2, O: 2, S: 1, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSpl | nLp | PATN1PATN1", T: 3, O: 2, S: 1, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSpl | nLp | PATN1PATN1", T: 1, O: 3, S: 1, Sh: 2, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSpl | nLp | PATN1PATN1", T: 2, O: 3, S: 1, Sh: 2, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSpl | nLp | PATN1PATN1", T: 3, O: 3, S: 1, Sh: 2, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nSb | nSpl | nLp | PATN1PATN1", T: 1, O: 1, S: 2, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSb | nSpl | nLp | PATN1PATN1", T: 2, O: 1, S: 2, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSb | nSpl | nLp | PATN1PATN1", T: 3, O: 1, S: 2, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSb | nSpl | nLp | PATN1PATN1", T: 1, O: 2, S: 2, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSb | nSpl | nLp | PATN1PATN1", T: 2, O: 2, S: 2, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSb | nSpl | nLp | PATN1PATN1", T: 3, O: 2, S: 2, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSb | nSpl | nLp | PATN1PATN1", T: 1, O: 3, S: 2, Sh: 2, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | nSpl | nLp | PATN1PATN1", T: 2, O: 3, S: 2, Sh: 2, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | nSpl | nLp | PATN1PATN1", T: 3, O: 3, S: 2, Sh: 2, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "SbSb | nSpl | nLp | PATN1PATN1", T: 1, O: 1, S: 3, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SbSb | nSpl | nLp | PATN1PATN1", T: 2, O: 1, S: 3, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SbSb | nSpl | nLp | PATN1PATN1", T: 3, O: 1, S: 3, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SbSb | nSpl | nLp | PATN1PATN1", T: 1, O: 2, S: 3, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SbSb | nSpl | nLp | PATN1PATN1", T: 2, O: 2, S: 3, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SbSb | nSpl | nLp | PATN1PATN1", T: 3, O: 2, S: 3, Sh: 2, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SbSb | nSpl | nLp | PATN1PATN1", T: 1, O: 3, S: 3, Sh: 2, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | nSpl | nLp | PATN1PATN1", T: 2, O: 3, S: 3, Sh: 2, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | nSpl | nLp | PATN1PATN1", T: 3, O: 3, S: 3, Sh: 2, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "SplSpl | nLp | PATN1PATN1", T: 1, O: 1, S: 1, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SplSpl | nLp | PATN1PATN1", T: 2, O: 1, S: 1, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SplSpl | nLp | PATN1PATN1", T: 3, O: 1, S: 1, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SplSpl | nLp | PATN1PATN1", T: 1, O: 2, S: 1, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SplSpl | nLp | PATN1PATN1", T: 2, O: 2, S: 1, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SplSpl | nLp | PATN1PATN1", T: 3, O: 2, S: 1, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SplSpl | nLp | PATN1PATN1", T: 1, O: 3, S: 1, Sh: 3, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | SplSpl | nLp | PATN1PATN1", T: 2, O: 3, S: 1, Sh: 3, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | SplSpl | nLp | PATN1PATN1", T: 3, O: 3, S: 1, Sh: 3, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nSb | SplSpl | nLp | PATN1PATN1", T: 1, O: 1, S: 2, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSb | SplSpl | nLp | PATN1PATN1", T: 2, O: 1, S: 2, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSb | SplSpl | nLp | PATN1PATN1", T: 3, O: 1, S: 2, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSb | SplSpl | nLp | PATN1PATN1", T: 1, O: 2, S: 2, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSb | SplSpl | nLp | PATN1PATN1", T: 2, O: 2, S: 2, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSb | SplSpl | nLp | PATN1PATN1", T: 3, O: 2, S: 2, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSb | SplSpl | nLp | PATN1PATN1", T: 1, O: 3, S: 2, Sh: 3, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | SplSpl | nLp | PATN1PATN1", T: 2, O: 3, S: 2, Sh: 3, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | SplSpl | nLp | PATN1PATN1", T: 3, O: 3, S: 2, Sh: 3, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "SbSb | SplSpl | nLp | PATN1PATN1", T: 1, O: 1, S: 3, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SbSb | SplSpl | nLp | PATN1PATN1", T: 2, O: 1, S: 3, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SbSb | SplSpl | nLp | PATN1PATN1", T: 3, O: 1, S: 3, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SbSb | SplSpl | nLp | PATN1PATN1", T: 1, O: 2, S: 3, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SbSb | SplSpl | nLp | PATN1PATN1", T: 2, O: 2, S: 3, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SbSb | SplSpl | nLp | PATN1PATN1", T: 3, O: 2, S: 3, Sh: 3, Lp: 2, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SbSb | SplSpl | nLp | PATN1PATN1", T: 1, O: 3, S: 3, Sh: 3, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | SplSpl | nLp | PATN1PATN1", T: 2, O: 3, S: 3, Sh: 3, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | SplSpl | nLp | PATN1PATN1", T: 3, O: 3, S: 3, Sh: 3, Lp: 2, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "LpLp | PATN1PATN1", T: 1, O: 1, S: 1, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Appaloosa com Pattern-1" },
            { Codigo: "nT | LpLp | PATN1PATN1", T: 2, O: 1, S: 1, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | LpLp | PATN1PATN1", T: 3, O: 1, S: 1, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | LpLp | PATN1PATN1", T: 1, O: 2, S: 1, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | LpLp | PATN1PATN1", T: 2, O: 2, S: 1, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | LpLp | PATN1PATN1", T: 3, O: 2, S: 1, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | LpLp | PATN1PATN1", T: 1, O: 3, S: 1, Sh: 1, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | LpLp | PATN1PATN1", T: 2, O: 3, S: 1, Sh: 1, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | LpLp | PATN1PATN1", T: 3, O: 3, S: 1, Sh: 1, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nSb | LpLp | PATN1PATN1", T: 1, O: 1, S: 2, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSb | LpLp | PATN1PATN1", T: 2, O: 1, S: 2, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSb | LpLp | PATN1PATN1", T: 3, O: 1, S: 2, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSb | LpLp | PATN1PATN1", T: 1, O: 2, S: 2, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSb | LpLp | PATN1PATN1", T: 2, O: 2, S: 2, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSb | LpLp | PATN1PATN1", T: 3, O: 2, S: 2, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSb | LpLp | PATN1PATN1", T: 1, O: 3, S: 2, Sh: 1, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | LpLp | PATN1PATN1", T: 2, O: 3, S: 2, Sh: 1, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | LpLp | PATN1PATN1", T: 3, O: 3, S: 2, Sh: 1, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "SbSb | LpLp | PATN1PATN1", T: 1, O: 1, S: 3, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SbSb | LpLp | PATN1PATN1", T: 2, O: 1, S: 3, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SbSb | LpLp | PATN1PATN1", T: 3, O: 1, S: 3, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SbSb | LpLp | PATN1PATN1", T: 1, O: 2, S: 3, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SbSb | LpLp | PATN1PATN1", T: 2, O: 2, S: 3, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SbSb | LpLp | PATN1PATN1", T: 3, O: 2, S: 3, Sh: 1, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SbSb | LpLp | PATN1PATN1", T: 1, O: 3, S: 3, Sh: 1, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | LpLp | PATN1PATN1", T: 2, O: 3, S: 3, Sh: 1, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | LpLp | PATN1PATN1", T: 3, O: 3, S: 3, Sh: 1, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nSpl | LpLp | PATN1PATN1", T: 1, O: 1, S: 1, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSpl | LpLp | PATN1PATN1", T: 2, O: 1, S: 1, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSpl | LpLp | PATN1PATN1", T: 3, O: 1, S: 1, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSpl | LpLp | PATN1PATN1", T: 1, O: 2, S: 1, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSpl | LpLp | PATN1PATN1", T: 2, O: 2, S: 1, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSpl | LpLp | PATN1PATN1", T: 3, O: 2, S: 1, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSpl | LpLp | PATN1PATN1", T: 1, O: 3, S: 1, Sh: 2, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSpl | LpLp | PATN1PATN1", T: 2, O: 3, S: 1, Sh: 2, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSpl | LpLp | PATN1PATN1", T: 3, O: 3, S: 1, Sh: 2, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nSb | nSpl | LpLp | PATN1PATN1", T: 1, O: 1, S: 2, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSb | nSpl | LpLp | PATN1PATN1", T: 2, O: 1, S: 2, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSb | nSpl | LpLp | PATN1PATN1", T: 3, O: 1, S: 2, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSb | nSpl | LpLp | PATN1PATN1", T: 1, O: 2, S: 2, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSb | nSpl | LpLp | PATN1PATN1", T: 2, O: 2, S: 2, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSb | nSpl | LpLp | PATN1PATN1", T: 3, O: 2, S: 2, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSb | nSpl | LpLp | PATN1PATN1", T: 1, O: 3, S: 2, Sh: 2, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | nSpl | LpLp | PATN1PATN1", T: 2, O: 3, S: 2, Sh: 2, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | nSpl | LpLp | PATN1PATN1", T: 3, O: 3, S: 2, Sh: 2, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "SbSb | nSpl | LpLp | PATN1PATN1", T: 1, O: 1, S: 3, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SbSb | nSpl | LpLp | PATN1PATN1", T: 2, O: 1, S: 3, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SbSb | nSpl | LpLp | PATN1PATN1", T: 3, O: 1, S: 3, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SbSb | nSpl | LpLp | PATN1PATN1", T: 1, O: 2, S: 3, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SbSb | nSpl | LpLp | PATN1PATN1", T: 2, O: 2, S: 3, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SbSb | nSpl | LpLp | PATN1PATN1", T: 3, O: 2, S: 3, Sh: 2, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SbSb | nSpl | LpLp | PATN1PATN1", T: 1, O: 3, S: 3, Sh: 2, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | nSpl | LpLp | PATN1PATN1", T: 2, O: 3, S: 3, Sh: 2, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | nSpl | LpLp | PATN1PATN1", T: 3, O: 3, S: 3, Sh: 2, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "SplSpl | LpLp | PATN1PATN1", T: 1, O: 1, S: 1, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SplSpl | LpLp | PATN1PATN1", T: 2, O: 1, S: 1, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SplSpl | LpLp | PATN1PATN1", T: 3, O: 1, S: 1, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SplSpl | LpLp | PATN1PATN1", T: 1, O: 2, S: 1, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SplSpl | LpLp | PATN1PATN1", T: 2, O: 2, S: 1, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SplSpl | LpLp | PATN1PATN1", T: 3, O: 2, S: 1, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SplSpl | LpLp | PATN1PATN1", T: 1, O: 3, S: 1, Sh: 3, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | SplSpl | LpLp | PATN1PATN1", T: 2, O: 3, S: 1, Sh: 3, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | SplSpl | LpLp | PATN1PATN1", T: 3, O: 3, S: 1, Sh: 3, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nSb | SplSpl | LpLp | PATN1PATN1", T: 1, O: 1, S: 2, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nSb | SplSpl | LpLp | PATN1PATN1", T: 2, O: 1, S: 2, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nSb | SplSpl | LpLp | PATN1PATN1", T: 3, O: 1, S: 2, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | nSb | SplSpl | LpLp | PATN1PATN1", T: 1, O: 2, S: 2, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | nSb | SplSpl | LpLp | PATN1PATN1", T: 2, O: 2, S: 2, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | nSb | SplSpl | LpLp | PATN1PATN1", T: 3, O: 2, S: 2, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | nSb | SplSpl | LpLp | PATN1PATN1", T: 1, O: 3, S: 2, Sh: 3, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | nSb | SplSpl | LpLp | PATN1PATN1", T: 2, O: 3, S: 2, Sh: 3, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | nSb | SplSpl | LpLp | PATN1PATN1", T: 3, O: 3, S: 2, Sh: 3, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "SbSb | SplSpl | LpLp | PATN1PATN1", T: 1, O: 1, S: 3, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | SbSb | SplSpl | LpLp | PATN1PATN1", T: 2, O: 1, S: 3, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | SbSb | SplSpl | LpLp | PATN1PATN1", T: 3, O: 1, S: 3, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nO | SbSb | SplSpl | LpLp | PATN1PATN1", T: 1, O: 2, S: 3, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "nT | nO | SbSb | SplSpl | LpLp | PATN1PATN1", T: 2, O: 2, S: 3, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "TT | nO | SbSb | SplSpl | LpLp | PATN1PATN1", T: 3, O: 2, S: 3, Sh: 3, Lp: 3, PATN1: 3, Padrao: "Pintaloosa com Pattern-1" },
            { Codigo: "OO | SbSb | SplSpl | LpLp | PATN1PATN1", T: 1, O: 3, S: 3, Sh: 3, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "nT | OO | SbSb | SplSpl | LpLp | PATN1PATN1", T: 2, O: 3, S: 3, Sh: 3, Lp: 3, PATN1: 3, Padrao: "LETAL" },
            { Codigo: "TT | OO | SbSb | SplSpl | LpLp | PATN1PATN1", T: 3, O: 3, S: 3, Sh: 3, Lp: 3, PATN1: 3, Padrao: "LETAL" },
        ],
        RtoS: [
            { ID: 1, RPai: "R2", SPai: "S2", RMae: "R1", SMae: "S1", H1: 2, H2: 2, PMultiplicador: 1 },
            { ID: 2, RPai: "R2", SPai: "S2", RMae: "R1", SMae: "S1", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 3, RPai: "R2", SPai: "S2", RMae: "R1", SMae: "S1", H1: 2, H2: 1, PMultiplicador: 2 },
            { ID: 4, RPai: "R2", SPai: "S2", RMae: "R1", SMae: "S1", H1: 1, H2: 2, PMultiplicador: 2 },
            { ID: 5, RPai: "R2", SPai: "S2", RMae: "R1", SMae: "S2", H1: 2, H2: 1, PMultiplicador: 2 },
            { ID: 6, RPai: "R2", SPai: "S2", RMae: "R1", SMae: "S2", H1: 1, H2: 3, PMultiplicador: 2 },
            { ID: 7, RPai: "R2", SPai: "S2", RMae: "R1", SMae: "S2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 8, RPai: "R2", SPai: "S2", RMae: "R1", SMae: "S2", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 9, RPai: "R2", SPai: "S2", RMae: "R1", SMae: "S3", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 10, RPai: "R2", SPai: "S2", RMae: "R1", SMae: "S3", H1: 1, H2: 3, PMultiplicador: 2 },
            { ID: 11, RPai: "R2", SPai: "S2", RMae: "R1", SMae: "S3", H1: 1, H2: 2, PMultiplicador: 1 },
            { ID: 12, RPai: "R2", SPai: "S2", RMae: "R1", SMae: "S3", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 13, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S1", H1: 1, H2: 2, PMultiplicador: 2 },
            { ID: 14, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S1", H1: 3, H2: 1, PMultiplicador: 2 },
            { ID: 15, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S1", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 16, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S1", H1: 3, H2: 2, PMultiplicador: 1 },
            { ID: 17, RPai: "R2", SPai: "S2", RMae: "R3", SMae: "S1", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 18, RPai: "R2", SPai: "S2", RMae: "R3", SMae: "S1", H1: 3, H2: 1, PMultiplicador: 2 },
            { ID: 19, RPai: "R2", SPai: "S2", RMae: "R3", SMae: "S1", H1: 2, H2: 1, PMultiplicador: 1 },
            { ID: 20, RPai: "R2", SPai: "S2", RMae: "R3", SMae: "S1", H1: 3, H2: 2, PMultiplicador: 1 },
            { ID: 21, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S2", H1: 1, H2: 3, PMultiplicador: 4 },
            { ID: 22, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S2", H1: 3, H2: 1, PMultiplicador: 4 },
            { ID: 23, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S2", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 24, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 25, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S2", H1: 1, H2: 2, PMultiplicador: 1 },
            { ID: 26, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S2", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 27, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S2", H1: 3, H2: 3, PMultiplicador: 1 },
            { ID: 28, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S2", H1: 2, H2: 1, PMultiplicador: 1 },
            { ID: 29, RPai: "R2", SPai: "S2", RMae: "R2", SMae: "S2", H1: 3, H2: 2, PMultiplicador: 1 },
            { ID: 30, RPai: "R1", SPai: "S1", RMae: "R2", SMae: "S2", H1: 2, H2: 2, PMultiplicador: 1 },
            { ID: 31, RPai: "R1", SPai: "S1", RMae: "R2", SMae: "S2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 32, RPai: "R1", SPai: "S1", RMae: "R2", SMae: "S2", H1: 2, H2: 1, PMultiplicador: 2 },
            { ID: 33, RPai: "R1", SPai: "S1", RMae: "R2", SMae: "S2", H1: 1, H2: 2, PMultiplicador: 2 },
            { ID: 34, RPai: "R1", SPai: "S2", RMae: "R2", SMae: "S2", H1: 2, H2: 1, PMultiplicador: 2 },
            { ID: 35, RPai: "R1", SPai: "S2", RMae: "R2", SMae: "S2", H1: 1, H2: 3, PMultiplicador: 2 },
            { ID: 36, RPai: "R1", SPai: "S2", RMae: "R2", SMae: "S2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 37, RPai: "R1", SPai: "S2", RMae: "R2", SMae: "S2", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 38, RPai: "R1", SPai: "S3", RMae: "R2", SMae: "S2", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 39, RPai: "R1", SPai: "S3", RMae: "R2", SMae: "S2", H1: 1, H2: 3, PMultiplicador: 2 },
            { ID: 40, RPai: "R1", SPai: "S3", RMae: "R2", SMae: "S2", H1: 1, H2: 2, PMultiplicador: 1 },
            { ID: 41, RPai: "R1", SPai: "S3", RMae: "R2", SMae: "S2", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 42, RPai: "R2", SPai: "S1", RMae: "R2", SMae: "S2", H1: 1, H2: 2, PMultiplicador: 2 },
            { ID: 43, RPai: "R2", SPai: "S1", RMae: "R2", SMae: "S2", H1: 3, H2: 1, PMultiplicador: 2 },
            { ID: 44, RPai: "R2", SPai: "S1", RMae: "R2", SMae: "S2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 45, RPai: "R2", SPai: "S1", RMae: "R2", SMae: "S2", H1: 3, H2: 2, PMultiplicador: 1 },
            { ID: 46, RPai: "R3", SPai: "S1", RMae: "R2", SMae: "S2", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 47, RPai: "R3", SPai: "S1", RMae: "R2", SMae: "S2", H1: 3, H2: 1, PMultiplicador: 2 },
            { ID: 48, RPai: "R3", SPai: "S1", RMae: "R2", SMae: "S2", H1: 2, H2: 1, PMultiplicador: 1 },
            { ID: 49, RPai: "R3", SPai: "S1", RMae: "R2", SMae: "S2", H1: 3, H2: 2, PMultiplicador: 1 },
        ],
        RtoT: [
            { ID: 1, RPai: "R2", TPai: "T2", RMae: "R1", TMae: "T1", H1: 2, H2: 2, PMultiplicador: 1 },
            { ID: 2, RPai: "R2", TPai: "T2", RMae: "R1", TMae: "T1", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 3, RPai: "R2", TPai: "T2", RMae: "R1", TMae: "T1", H1: 2, H2: 1, PMultiplicador: 2 },
            { ID: 4, RPai: "R2", TPai: "T2", RMae: "R1", TMae: "T1", H1: 1, H2: 2, PMultiplicador: 2 },
            { ID: 5, RPai: "R2", TPai: "T2", RMae: "R1", TMae: "T2", H1: 2, H2: 1, PMultiplicador: 2 },
            { ID: 6, RPai: "R2", TPai: "T2", RMae: "R1", TMae: "T2", H1: 1, H2: 3, PMultiplicador: 2 },
            { ID: 7, RPai: "R2", TPai: "T2", RMae: "R1", TMae: "T2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 8, RPai: "R2", TPai: "T2", RMae: "R1", TMae: "T2", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 9, RPai: "R2", TPai: "T2", RMae: "R1", TMae: "T3", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 10, RPai: "R2", TPai: "T2", RMae: "R1", TMae: "T3", H1: 1, H2: 3, PMultiplicador: 2 },
            { ID: 11, RPai: "R2", TPai: "T2", RMae: "R1", TMae: "T3", H1: 1, H2: 2, PMultiplicador: 1 },
            { ID: 12, RPai: "R2", TPai: "T2", RMae: "R1", TMae: "T3", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 13, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T1", H1: 1, H2: 2, PMultiplicador: 2 },
            { ID: 14, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T1", H1: 3, H2: 1, PMultiplicador: 2 },
            { ID: 15, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T1", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 16, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T1", H1: 3, H2: 2, PMultiplicador: 1 },
            { ID: 17, RPai: "R2", TPai: "T2", RMae: "R3", TMae: "T1", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 18, RPai: "R2", TPai: "T2", RMae: "R3", TMae: "T1", H1: 3, H2: 1, PMultiplicador: 2 },
            { ID: 19, RPai: "R2", TPai: "T2", RMae: "R3", TMae: "T1", H1: 2, H2: 1, PMultiplicador: 1 },
            { ID: 20, RPai: "R2", TPai: "T2", RMae: "R3", TMae: "T1", H1: 3, H2: 2, PMultiplicador: 1 },
            { ID: 21, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T2", H1: 1, H2: 3, PMultiplicador: 4 },
            { ID: 22, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T2", H1: 3, H2: 1, PMultiplicador: 4 },
            { ID: 23, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T2", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 24, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 25, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T2", H1: 1, H2: 2, PMultiplicador: 1 },
            { ID: 26, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T2", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 27, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T2", H1: 3, H2: 3, PMultiplicador: 1 },
            { ID: 28, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T2", H1: 2, H2: 1, PMultiplicador: 1 },
            { ID: 29, RPai: "R2", TPai: "T2", RMae: "R2", TMae: "T2", H1: 3, H2: 2, PMultiplicador: 1 },
            { ID: 30, RPai: "R1", TPai: "T1", RMae: "R2", TMae: "T2", H1: 2, H2: 2, PMultiplicador: 1 },
            { ID: 31, RPai: "R1", TPai: "T1", RMae: "R2", TMae: "T2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 32, RPai: "R1", TPai: "T1", RMae: "R2", TMae: "T2", H1: 2, H2: 1, PMultiplicador: 2 },
            { ID: 33, RPai: "R1", TPai: "T1", RMae: "R2", TMae: "T2", H1: 1, H2: 2, PMultiplicador: 2 },
            { ID: 34, RPai: "R1", TPai: "T2", RMae: "R2", TMae: "T2", H1: 2, H2: 1, PMultiplicador: 2 },
            { ID: 35, RPai: "R1", TPai: "T2", RMae: "R2", TMae: "T2", H1: 1, H2: 3, PMultiplicador: 2 },
            { ID: 36, RPai: "R1", TPai: "T2", RMae: "R2", TMae: "T2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 37, RPai: "R1", TPai: "T2", RMae: "R2", TMae: "T2", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 38, RPai: "R1", TPai: "T3", RMae: "R2", TMae: "T2", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 39, RPai: "R1", TPai: "T3", RMae: "R2", TMae: "T2", H1: 1, H2: 3, PMultiplicador: 2 },
            { ID: 40, RPai: "R1", TPai: "T3", RMae: "R2", TMae: "T2", H1: 1, H2: 2, PMultiplicador: 1 },
            { ID: 41, RPai: "R1", TPai: "T3", RMae: "R2", TMae: "T2", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 42, RPai: "R2", TPai: "T1", RMae: "R2", TMae: "T2", H1: 1, H2: 2, PMultiplicador: 2 },
            { ID: 43, RPai: "R2", TPai: "T1", RMae: "R2", TMae: "T2", H1: 3, H2: 1, PMultiplicador: 2 },
            { ID: 44, RPai: "R2", TPai: "T1", RMae: "R2", TMae: "T2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 45, RPai: "R2", TPai: "T1", RMae: "R2", TMae: "T2", H1: 3, H2: 2, PMultiplicador: 1 },
            { ID: 46, RPai: "R3", TPai: "T1", RMae: "R2", TMae: "T2", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 47, RPai: "R3", TPai: "T1", RMae: "R2", TMae: "T2", H1: 3, H2: 1, PMultiplicador: 2 },
            { ID: 48, RPai: "R3", TPai: "T1", RMae: "R2", TMae: "T2", H1: 2, H2: 1, PMultiplicador: 1 },
            { ID: 49, RPai: "R3", TPai: "T1", RMae: "R2", TMae: "T2", H1: 3, H2: 2, PMultiplicador: 1 },
        ],
        TtoS: [
            { ID: 1, TPai: "T2", SPai: "S2", TMae: "T1", SMae: "S1", H1: 2, H2: 2, PMultiplicador: 1 },
            { ID: 2, TPai: "T2", SPai: "S2", TMae: "T1", SMae: "S1", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 3, TPai: "T2", SPai: "S2", TMae: "T1", SMae: "S1", H1: 2, H2: 1, PMultiplicador: 2 },
            { ID: 4, TPai: "T2", SPai: "S2", TMae: "T1", SMae: "S1", H1: 1, H2: 2, PMultiplicador: 2 },
            { ID: 5, TPai: "T2", SPai: "S2", TMae: "T1", SMae: "S2", H1: 2, H2: 1, PMultiplicador: 2 },
            { ID: 6, TPai: "T2", SPai: "S2", TMae: "T1", SMae: "S2", H1: 1, H2: 3, PMultiplicador: 2 },
            { ID: 7, TPai: "T2", SPai: "S2", TMae: "T1", SMae: "S2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 8, TPai: "T2", SPai: "S2", TMae: "T1", SMae: "S2", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 9, TPai: "T2", SPai: "S2", TMae: "T1", SMae: "S3", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 10, TPai: "T2", SPai: "S2", TMae: "T1", SMae: "S3", H1: 1, H2: 3, PMultiplicador: 2 },
            { ID: 11, TPai: "T2", SPai: "S2", TMae: "T1", SMae: "S3", H1: 1, H2: 2, PMultiplicador: 1 },
            { ID: 12, TPai: "T2", SPai: "S2", TMae: "T1", SMae: "S3", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 13, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S1", H1: 1, H2: 2, PMultiplicador: 2 },
            { ID: 14, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S1", H1: 3, H2: 1, PMultiplicador: 2 },
            { ID: 15, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S1", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 16, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S1", H1: 3, H2: 2, PMultiplicador: 1 },
            { ID: 17, TPai: "T2", SPai: "S2", TMae: "T3", SMae: "S1", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 18, TPai: "T2", SPai: "S2", TMae: "T3", SMae: "S1", H1: 3, H2: 1, PMultiplicador: 2 },
            { ID: 19, TPai: "T2", SPai: "S2", TMae: "T3", SMae: "S1", H1: 2, H2: 1, PMultiplicador: 1 },
            { ID: 20, TPai: "T2", SPai: "S2", TMae: "T3", SMae: "S1", H1: 3, H2: 2, PMultiplicador: 1 },
            { ID: 21, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S2", H1: 1, H2: 3, PMultiplicador: 4 },
            { ID: 22, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S2", H1: 3, H2: 1, PMultiplicador: 4 },
            { ID: 23, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S2", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 24, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 25, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S2", H1: 1, H2: 2, PMultiplicador: 1 },
            { ID: 26, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S2", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 27, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S2", H1: 3, H2: 3, PMultiplicador: 1 },
            { ID: 28, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S2", H1: 2, H2: 1, PMultiplicador: 1 },
            { ID: 29, TPai: "T2", SPai: "S2", TMae: "T2", SMae: "S2", H1: 3, H2: 2, PMultiplicador: 1 },
            { ID: 30, TPai: "T1", SPai: "S1", TMae: "T2", SMae: "S2", H1: 2, H2: 2, PMultiplicador: 1 },
            { ID: 31, TPai: "T1", SPai: "S1", TMae: "T2", SMae: "S2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 32, TPai: "T1", SPai: "S1", TMae: "T2", SMae: "S2", H1: 2, H2: 1, PMultiplicador: 2 },
            { ID: 33, TPai: "T1", SPai: "S1", TMae: "T2", SMae: "S2", H1: 1, H2: 2, PMultiplicador: 2 },
            { ID: 34, TPai: "T1", SPai: "S2", TMae: "T2", SMae: "S2", H1: 2, H2: 1, PMultiplicador: 2 },
            { ID: 35, TPai: "T1", SPai: "S2", TMae: "T2", SMae: "S2", H1: 1, H2: 3, PMultiplicador: 2 },
            { ID: 36, TPai: "T1", SPai: "S2", TMae: "T2", SMae: "S2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 37, TPai: "T1", SPai: "S2", TMae: "T2", SMae: "S2", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 38, TPai: "T1", SPai: "S3", TMae: "T2", SMae: "S2", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 39, TPai: "T1", SPai: "S3", TMae: "T2", SMae: "S2", H1: 1, H2: 3, PMultiplicador: 2 },
            { ID: 40, TPai: "T1", SPai: "S3", TMae: "T2", SMae: "S2", H1: 1, H2: 2, PMultiplicador: 1 },
            { ID: 41, TPai: "T1", SPai: "S3", TMae: "T2", SMae: "S2", H1: 2, H2: 3, PMultiplicador: 1 },
            { ID: 42, TPai: "T2", SPai: "S1", TMae: "T2", SMae: "S2", H1: 1, H2: 2, PMultiplicador: 2 },
            { ID: 43, TPai: "T2", SPai: "S1", TMae: "T2", SMae: "S2", H1: 3, H2: 1, PMultiplicador: 2 },
            { ID: 44, TPai: "T2", SPai: "S1", TMae: "T2", SMae: "S2", H1: 1, H2: 1, PMultiplicador: 1 },
            { ID: 45, TPai: "T2", SPai: "S1", TMae: "T2", SMae: "S2", H1: 3, H2: 2, PMultiplicador: 1 },
            { ID: 46, TPai: "T3", SPai: "S1", TMae: "T2", SMae: "S2", H1: 2, H2: 2, PMultiplicador: 2 },
            { ID: 47, TPai: "T3", SPai: "S1", TMae: "T2", SMae: "S2", H1: 3, H2: 1, PMultiplicador: 2 },
            { ID: 48, TPai: "T3", SPai: "S1", TMae: "T2", SMae: "S2", H1: 2, H2: 1, PMultiplicador: 1 },
            { ID: 49, TPai: "T3", SPai: "S1", TMae: "T2", SMae: "S2", H1: 3, H2: 2, PMultiplicador: 1 },
        ],
    },

        // Seção
        PelagemPrincipal = {
            getColorOptions: () => data.MapCores.sort((_, r) => _.ID - r.ID).map((_) => ({ value: _.ID, label: _.Cor })),
            getPadraoOptions: () => data.MapPadrao.sort((_, r) => _.ID - r.ID).map((_) => ({ value: _.ID, label: _.Padrao })),
            getCoresPadroesEPossiveisOpcoes(_) {
                var r, e, C, l, a, o, A, P, S, n, E, T, p, t, D, h, i, R, $;
                if (!_.colorId) return { error: { Codigo: 1, message: "Cor do animal é um campo obrigatório. " } };
                let L = data.MapCores.filter((r) => r.ID == _.colorId)[0] || {},
                    m = data.MapPadrao.filter((r) => r.ID == _.PadraoId)[0] || {};
                return "T2" == m.T && "R2" == L.R && "S2" == m.S
                    ? {
                        error: {
                            Codigo: 2,
                            message: "Tobiano, Sabino e Rosilho são todas mutações que afetam o gene KIT, portanto é improvável que um cavalo carregue todas as três. O cavalo pode ser Tobiano e Sabino, com o enruanamento (característica da pelagem Rosilha) proveniente do Sabino. ",
                        },
                    }
                    : [
                        "E1" == (r = L.E)
                            ? { color: "E", options: [{ type: "hidden", value: "E1" }] }
                            : {
                                title: "Fator Vermelho (Extensão)",
                                color: "E",
                                options: [
                                    { type: "radio", value: "EU", label: "Desconhecido", checked: "checked" },
                                    { type: "radio", value: "E2", label: "Heterozigoto (Ee)" },
                                    { type: "radio", value: "E3", label: "Homozigoto Preto (EE)" },
                                ],
                            },
                        "A1" == (e = L.A)
                            ? { color: "A", options: [{ type: "hidden", value: "A1" }] }
                            : "A3" == e
                                ? {
                                    title: "Agouti (Castanho | Preto)",
                                    color: "A",
                                    options: [
                                        { type: "radio", value: "AU", label: "Desconhecido", checked: "checked" },
                                        { type: "radio", value: "A1", label: "Não-Agouti (aa)" },
                                        { type: "radio", value: "A2", label: "Heterozigoto (Aa)" },
                                        { type: "radio", value: "A3", label: "Homozigoto Agouti (AA)" },
                                    ],
                                }
                                : {
                                    title: "Agouti (Castanho | Preto)",
                                    color: "A",
                                    options: [
                                        { type: "radio", value: "AU", label: "Desconhecido", checked: "checked" },
                                        { type: "radio", value: "A2", label: "Heterozigoto (Aa)" },
                                        { type: "radio", value: "A3", label: "Homozigoto Agouti (AA)" },
                                    ],
                                },
                        (function _(r) {
                            if ("CPrl2" == r) return { color: "CPrl", options: [{ type: "hidden", value: "CPrl2" }] };
                            if ("CPrl3" == r) return { color: "CPrl", options: [{ type: "hidden", value: "CPrl3" }] };
                            if ("CPrl4" == r) return { color: "CPrl", options: [{ type: "hidden", value: "CPrl4" }] };
                            if ("CPrl5" == r) return { color: "CPrl", options: [{ type: "hidden", value: "CPrl5" }] };
                            if ("CPrl6" == r) return { color: "CPrl", options: [{ type: "hidden", value: "CPrl6" }] };
                            else return { color: "CPrl", options: [{ type: "hidden", value: "CPrl1" }] };
                        })(L.CPrl),
                        "Z1" == (C = L.Z)
                            ? { color: "Z", options: [{ type: "hidden", value: "Z1" }] }
                            : "Z2" == C
                                ? {
                                    title: "Diluição: Silver",
                                    color: "Z",
                                    options: [
                                        { type: "radio", value: "Z2", label: "Heterozigoto (nZ)", checked: "checked" },
                                        { type: "radio", value: "Z3", label: "Homozigoto Silver (ZZ)" },
                                    ],
                                }
                                : {
                                    title: "Diluição: Silver",
                                    color: "Z",
                                    options: [
                                        { type: "radio", value: "Z1", label: "Não Portador", checked: "checked" },
                                        { type: "radio", value: "Z2", label: "Heterozigoto (nZ)" },
                                        { type: "radio", value: "Z3", label: "Homozigoto Silver (ZZ)" },
                                    ],
                                },
                        (l = _.isTordilho)
                            ? {
                                title: "Tordilho",
                                color: "G",
                                options: [
                                    { type: "radio", value: "G2", label: "Heterozigoto (Gg)", checked: "checked" },
                                    { type: "radio", value: "G3", label: "Homozigoto (GG)" },
                                ],
                            }
                            : { color: "G", options: [{ type: "hidden", value: "G1" }] },
                        "D2" == (a = L.D)
                            ? {
                                title: "Diluição: Dun",
                                color: "D",
                                options: [
                                    { type: "radio", value: "D2", label: "Heterozigoto Dun (Dd)", checked: "checked" },
                                    { type: "radio", value: "D3", label: "Homozigoto Dun (DD)" },
                                ],
                            }
                            : { color: "D", options: [{ type: "hidden", value: "D1" }] },
                        "Ch2" == (o = L.Ch)
                            ? {
                                title: "Diluição: Champagne",
                                color: "Ch",
                                options: [
                                    { type: "radio", value: "Ch2", label: "Heterozigoto Champagne (nCh)", checked: "checked" },
                                    { type: "radio", value: "Ch3", label: "Homozigoto Champagne (ChCh)" },
                                ],
                            }
                            : { color: "Ch", options: [{ type: "hidden", value: "Ch1" }] },
                        ((A = m.T),
                            (P = L.R),
                            (S = m.S),
                            ("T2" == A && "R2" == P) || ("S2" == S && "R2" == P)
                                ? { color: "R", options: [{ type: "hidden", value: "R2" }] }
                                : "R2" == P
                                    ? {
                                        color: "R",
                                        title: "Rosilho",
                                        options: [
                                            { type: "radio", value: "R2", label: "Heterozigoto (nRN)", checked: "checked" },
                                            { type: "radio", value: "R3", label: "Homozigoto (RNRN)" },
                                        ],
                                    }
                                    : { color: "R", options: [{ type: "hidden", value: "R1" }] }),
                        ((n = m.T),
                            (E = L.R),
                            (T = m.S),
                            ("T2" == n && "R2" == E) || ("T2" == n && "S2" == T)
                                ? { color: "T", options: [{ type: "hidden", value: "T2" }] }
                                : "T2" == n
                                    ? {
                                        title: "Tobiano",
                                        color: "T",
                                        options: [
                                            { type: "radio", value: "T2", label: "Heterozigoto (nT)", checked: "checked" },
                                            { type: "radio", value: "T3", label: "Homozigoto (TT)" },
                                        ],
                                    }
                                    : { color: "T", options: [{ type: "hidden", value: "T1" }] }),
                        ((p = m.T),
                            (t = L.R),
                            (D = m.S),
                            ("T2" == p && "S2" == D) || ("S2" == D && "R2" == t)
                                ? { color: "S", options: [{ type: "hidden", value: "S2" }] }
                                : "S2" == D
                                    ? {
                                        title: "Sabino",
                                        color: "S",
                                        options: [
                                            { type: "radio", value: "S2", label: "Heterozigoto (nSb)", checked: "checked" },
                                            { type: "radio", value: "S3", label: "Homozigoto (SbSb)" },
                                        ],
                                    }
                                    : { color: "S", options: [{ type: "hidden", value: "S1" }] }),
                        "Sh2" == (h = m.Sh)
                            ? {
                                title: "Splash",
                                color: "Sh",
                                options: [
                                    { type: "radio", value: "Sh2", label: "Heterozigoto (nSpl)", checked: "checked" },
                                    { type: "radio", value: "Sh3", label: "Homozigoto (SplSpl)" },
                                ],
                            }
                            : { color: "Sh", options: [{ type: "hidden", value: "Sh1" }] },
                        "Lp2" == (i = m.Lp)
                            ? {
                                title: "Appaloosa",
                                color: "Lp",
                                options: [
                                    { type: "radio", value: "Lp2", label: "Heterozigoto (nLp)", checked: "checked" },
                                    { type: "radio", value: "Lp3", label: "Homozigoto (LpLp)" },
                                ],
                            }
                            : { color: "Lp", options: [{ type: "hidden", value: "Lp1" }] },
                        "PATN12" == (R = m.PATN1)
                            ? {
                                title: "PATN-1",
                                color: "PATN1",
                                options: [
                                    { type: "radio", value: "PATN11", label: "Não Portador", checked: "checked" },
                                    { type: "radio", value: "PATN12", label: "Heterozigoto (nPATN1)" },
                                    { type: "radio", value: "PATN13", label: "Homozigoto (PATN1PATN1)" },
                                ],
                            }
                            : { color: "PATN1", options: [{ type: "hidden", value: "PATN11" }] },
                        "O2" == ($ = m.O) ? { color: "O", options: [{ type: "hidden", value: "O2" }] } : { color: "O", options: [{ type: "hidden", value: "O1" }] },
                    ];
            },
            calculaPelo(_, r) {
                var e, C;
                let l = (function e() {
                    var C, l, a, o, A, P, S, n, E, T, p, t, D, h, i, R, $, L, m, d, N, O, Z, G, b, u;
                    let s =
                        ((C = _),
                            (l = r),
                            data.EA.filter((_) => _.EPai == l.E)
                                .filter((_) => _.APai == l.A)
                                .filter((_) => _.EMae == C.E)
                                .filter((_) => _.AMae == C.A)[0]),
                        H = ((a = _), (o = r), data.CPrl.filter((_) => _.CPrlPai == o.CPrl).filter((_) => _.CPrlMae == a.CPrl)[0]),
                        v = ((A = _), (P = r), data.Z.filter((_) => _.ZPai == P.Z).filter((_) => _.ZMae == A.Z)[0]),
                        g = ((S = _), (n = r), data.G.filter((_) => _.GPai == n.G).filter((_) => _.GMae == S.G)[0]),
                        c = ((E = _), (T = r), data.D.filter((_) => _.DPai == T.D).filter((_) => _.DMae == E.D)[0]),
                        U = ((p = _), (t = r), data.Ch.filter((_) => _.ChPai == t.Ch).filter((_) => _.ChMae == p.Ch)[0]),
                        I = ((D = _), (h = r), data.R.filter((_) => _.RPai == h.R).filter((_) => _.RMae == D.R)[0]),
                        k = ((i = _), (R = r), data.T.filter((_) => _.TPai == R.T).filter((_) => _.TMae == i.T)[0]),
                        y = (($ = _), (L = r), data.O.filter((_) => _.OPai == L.O).filter((_) => _.OMae == $.O)[0]),
                        w = ((m = _), (d = r), data.S.filter((_) => _.SPai == d.S).filter((_) => _.SMae == m.S)[0]),
                        B = ((N = _), (O = r), data.Sh.filter((_) => _.ShPai == O.Sh).filter((_) => _.ShMae == N.Sh)[0]),
                        M = ((Z = _), (G = r), data.Lp.filter((_) => _.LpPai == G.Lp).filter((_) => _.LpMae == Z.Lp)[0]),
                        f = ((b = _), (u = r), data.PATN1.filter((_) => _.PATN1Pai == u.PATN1).filter((_) => _.PATN1Mae == b.PATN1)[0]),
                        F = [s.E1, s.E2, s.E3],
                        z = [s.A1, s.A2, s.A3],
                        q = [H.CPrl1, H.CPrl2, H.CPrl3, H.CPrl4, H.CPrl5, H.CPrl6],
                        x = [v.Z1, v.Z2, v.Z3],
                        K = [g.G1, g.G2, g.G3],
                        j = [c.D1, c.D2, c.D3],
                        J = [U.Ch1, U.Ch2, U.Ch3],
                        Q = [I.R1, I.R2, I.R3],
                        V = [k.T1, k.T2, k.T3],
                        W = [y.O1, y.O2, y.O3],
                        X = [w.S1, w.S2, w.S3],
                        Y = [B.Sh1, B.Sh2, B.Sh3],
                        __ = [M.Lp1, M.Lp2, M.Lp3],
                        _r = [f.PATN11, f.PATN12, f.PATN13],
                        _e = [];
                    for (let _C = 0; _C < F.length; _C++)
                        if (0 != F[_C]) {
                            for (let _0 = 0; _0 < z.length; _0++)
                                if (0 != z[_0]) {
                                    for (let _l = 0; _l < q.length; _l++)
                                        if (0 != q[_l]) {
                                            for (let _a = 0; _a < x.length; _a++)
                                                if (0 != x[_a]) {
                                                    for (let _o = 0; _o < K.length; _o++)
                                                        if (0 != K[_o]) {
                                                            for (let _A = 0; _A < j.length; _A++)
                                                                if (0 != j[_A]) {
                                                                    for (let _P = 0; _P < J.length; _P++)
                                                                        if (0 != J[_P]) {
                                                                            for (let _S = 0; _S < Q.length; _S++)
                                                                                if (0 != Q[_S]) {
                                                                                    for (let _n = 0; _n < V.length; _n++)
                                                                                        if (0 != V[_n]) {
                                                                                            for (let _E = 0; _E < W.length; _E++)
                                                                                                if (0 != W[_E]) {
                                                                                                    for (let _T = 0; _T < X.length; _T++)
                                                                                                        if (0 != X[_T]) {
                                                                                                            for (let _1 = 0; _1 < Y.length; _1++)
                                                                                                                if (0 != Y[_1]) {
                                                                                                                    for (let _p = 0; _p < __.length; _p++)
                                                                                                                        if (0 != __[_p])
                                                                                                                            for (let _t = 0; _t < _r.length; _t++) {
                                                                                                                                if (0 == _r[_t]) continue;
                                                                                                                                let _D = 1;
                                                                                                                                if (("R2" == _.R && "T2" == _.T) || ("R2" == r.R && "T2" == r.T)) {
                                                                                                                                    let _h = data.RtoT.filter((r) => r.RMae == _.R)
                                                                                                                                        .filter((r) => r.TMae == _.T)
                                                                                                                                        .filter((_) => _.RPai == r.R)
                                                                                                                                        .filter((_) => _.TPai == r.T)
                                                                                                                                        .filter((_) => _.H1 == _S + 1)
                                                                                                                                        .filter((_) => _.H2 == _n + 1);
                                                                                                                                    if (0 != _h.length) {
                                                                                                                                        let _i = _h[0].PMultiplicador;
                                                                                                                                        if (1 == _i) continue;
                                                                                                                                        _D *= _i;
                                                                                                                                    }
                                                                                                                                }
                                                                                                                                if (("R2" == _.R && "S2" == _.S) || ("R2" == r.R && "S2" == r.S)) {
                                                                                                                                    let _R = data.RtoS.filter((r) => r.RMae == _.R)
                                                                                                                                        .filter((r) => r.SMae == _.S)
                                                                                                                                        .filter((_) => _.RPai == r.R)
                                                                                                                                        .filter((_) => _.SPai == r.S)
                                                                                                                                        .filter((_) => _.H1 == _S + 1)
                                                                                                                                        .filter((_) => _.H2 == _T + 1);
                                                                                                                                    if (0 != _R.length) {
                                                                                                                                        let _$ = _R[0].PMultiplicador;
                                                                                                                                        if (1 == _$) continue;
                                                                                                                                        _D *= _$;
                                                                                                                                    }
                                                                                                                                }
                                                                                                                                if (("T2" == _.T && "S2" == _.S) || ("T2" == r.T && "S2" == r.S)) {
                                                                                                                                    let _L = data.TtoS.filter((r) => r.TMae == _.T)
                                                                                                                                        .filter((r) => r.SMae == _.S)
                                                                                                                                        .filter((_) => _.TPai == r.T)
                                                                                                                                        .filter((_) => _.SPai == r.S)
                                                                                                                                        .filter((_) => _.H1 == _n + 1)
                                                                                                                                        .filter((_) => _.H2 == _T + 1);
                                                                                                                                    if (0 != _L.length) {
                                                                                                                                        let _m = _L[0].PMultiplicador;
                                                                                                                                        if (1 == _m) continue;
                                                                                                                                        _D *= _m;
                                                                                                                                    }
                                                                                                                                }
                                                                                                                                _D *=
                                                                                                                                    F[_C] *
                                                                                                                                    z[_0] *
                                                                                                                                    q[_l] *
                                                                                                                                    x[_a] *
                                                                                                                                    j[_A] *
                                                                                                                                    K[_o] *
                                                                                                                                    J[_P] *
                                                                                                                                    Q[_S] *
                                                                                                                                    V[_n] *
                                                                                                                                    W[_E] *
                                                                                                                                    X[_T] *
                                                                                                                                    Y[_1] *
                                                                                                                                    __[_p] *
                                                                                                                                    _r[_t];
                                                                                                                                let _d = 0 == _P ? 1 : 2,
                                                                                                                                    _N = 0 == _a ? 1 : 2,
                                                                                                                                    _O = 0 == _S ? 1 : 2,
                                                                                                                                    _3 = 0 == _A ? 1 : 2,
                                                                                                                                    _Z = data.Colors.filter((_) => _.E == _C + 1)
                                                                                                                                        .filter((_) => _.A == _0 + 1)
                                                                                                                                        .filter((_) => _.CPrl == _l + 1)
                                                                                                                                        .filter((_) => _.Ch == _d)
                                                                                                                                        .filter((_) => _.Z == _N)
                                                                                                                                        .filter((_) => _.R == _O)
                                                                                                                                        .filter((_) => _.D == _3)[0],
                                                                                                                                    _G = _Z.Cor,
                                                                                                                                    _b = _Z.Codigo;
                                                                                                                                1 == _P ? (_b += " | nCh") : 2 == _P && (_b += " | ChCh"),
                                                                                                                                    1 == _A ? (_b += " | Dd") : 2 == _A && (_b += " | DD"),
                                                                                                                                    1 == _a ? (_b += " | nZ") : 2 == _a && (_b += " | ZZ"),
                                                                                                                                    1 == _S ? (_b += " | nRN") : 2 == _S && (_b += " | RNRN"),
                                                                                                                                    1 == _o
                                                                                                                                        ? ((_b += " | Gg"), (_G = "Tordilho (" + _G + ")"))
                                                                                                                                        : 2 == _o && ((_b += " | GG"), (_G = "Tordilho (" + _G + ")"));
                                                                                                                                let _u = data.Padroes.filter((_) => _.T == _n + 1)
                                                                                                                                    .filter((_) => _.O == _E + 1)
                                                                                                                                    .filter((_) => _.S == _T + 1)
                                                                                                                                    .filter((_) => _.Sh == _1 + 1)
                                                                                                                                    .filter((_) => _.Lp == _p + 1)
                                                                                                                                    .filter((_) => _.PATN1 == _t + 1)[0];
                                                                                                                                _u.Codigo && (_b += " | " + _u.Codigo),
                                                                                                                                    "LETAL" == _u.Padrao ? (_G = "LETAL (Síndrome do Potro Branco)") : _u.Padrao && (_G += " " + _u.Padrao),
                                                                                                                                    _e.push({ TotP: _D, color: _G, Codigo: _b });
                                                                                                                            }
                                                                                                                }
                                                                                                        }
                                                                                                }
                                                                                        }
                                                                                }
                                                                        }
                                                                }
                                                        }
                                                }
                                        }
                                }
                        }
                    return _e;
                })(),
                    a,
                    o =
                        ((e = l),
                            (a = []),
                            e.forEach((_) => {
                                a.map((_) => _.color).includes(_.color) || a.push({ color: _.color, sumTotP: 0, entries: [] });
                                let r = a.filter((r) => r.color == _.color)[0];
                                (r.sumTotP += _.TotP), r.entries.push({ Codigo: _.Codigo, TotP: _.TotP });
                            }),
                            a),
                    A =
                        ((C = o).sort((_, r) => r.sumTotP - _.sumTotP || _.color.trim().localeCompare(r.color.trim())),
                            C.forEach((_) => {
                                _.entries.sort((_, r) => r.TotP - _.TotP || _.Codigo.trim().localeCompare(r.Codigo.trim()));
                            }),
                            C);
                return A;
            },
        };

    // Camada da Aplicação

    !(function () {
        let e = document.getElementById("CalculadoraPelagem"),
            t = document.createElement("span");
        t.id = "ProgenitoresSection";
        let n = document.createElement("span");
        n.id = "MaeSection";
        let l = document.createElement("h2");
        (l.innerHTML = "Égua"), n.appendChild(l);
        let a = document.createElement("span");
        n.appendChild(a);
        let d = document.createElement("label");
        (d.for = "MaeColor"), (d.innerHTML = "Cor"), a.appendChild(d), a.appendChild(document.createElement("br"));
        let r = document.createElement("select");
        (r.id = "MaeColor"), a.appendChild(r), a.appendChild(document.createElement("br")), a.appendChild(document.createElement("br"));
        let i = document.createElement("span");
        n.appendChild(i);
        let p = document.createElement("label");
        (p.for = "MaePadrao"), (p.innerHTML = "Padrão"), i.appendChild(p), i.appendChild(document.createElement("br"));
        let c = document.createElement("select");
        c.id = "MaePadrao";
        let o = document.createElement("option");
        (o.value = "0"), (o.innerHTML = "Sólido"), c.appendChild(o), i.appendChild(c), i.appendChild(document.createElement("br")), i.appendChild(document.createElement("br"));
        let m = document.createElement("span");
        n.appendChild(m);
        let s = document.createElement("label");
        (s.for = "MaeTordilho"), (s.innerHTML = "Tordilho"), m.appendChild(s), m.appendChild(document.createElement("br"));
        let h = document.createElement("select");
        h.id = "MaeTordilho";
        let E = document.createElement("option");
        (E.value = "false"), (E.innerHTML = "Não"), h.appendChild(E);
        let C = document.createElement("option");
        (C.value = "true"), (C.innerHTML = "Sim"), h.appendChild(C), m.appendChild(h), m.appendChild(document.createElement("br")), m.appendChild(document.createElement("br"));
        let y = document.createElement("span");
        (y.id = "MaeErrorSection"), n.appendChild(y);
        let g = document.createElement("span");
        (g.id = "MaeAdvancedOptionsSectionBody"), n.appendChild(g), t.appendChild(n);
        let u = document.createElement("span");
        u.id = "PaiSection";
        let b = document.createElement("h2");
        (b.innerHTML = "Garanhão"), u.appendChild(b);
        let v = document.createElement("span");
        u.appendChild(v);
        let f = document.createElement("label");
        (f.for = "PaiColor"), (f.innerHTML = "Cor"), v.appendChild(f), v.appendChild(document.createElement("br"));
        let B = document.createElement("select");
        (B.id = "PaiColor"), v.appendChild(B), v.appendChild(document.createElement("br")), v.appendChild(document.createElement("br"));
        let L = document.createElement("span");
        u.appendChild(L);
        let T = document.createElement("label");
        (T.for = "PaiPadrao"), (T.innerHTML = "Padrão"), L.appendChild(T), L.appendChild(document.createElement("br"));
        let H = document.createElement("select");
        H.id = "PaiPadrao";
        let I = document.createElement("option");
        (I.value = "0"), (I.innerHTML = "Sólido"), H.appendChild(I), L.appendChild(H), L.appendChild(document.createElement("br")), L.appendChild(document.createElement("br"));
        let M = document.createElement("span");
        u.appendChild(M);
        let S = document.createElement("label");
        (S.for = "PaiTordilho"), (S.innerHTML = "Tordilho"), M.appendChild(S), M.appendChild(document.createElement("br"));
        let P = document.createElement("select");
        P.id = "PaiTordilho";
        let G = document.createElement("option");
        (G.value = "false"), (G.innerHTML = "Não"), P.appendChild(G);
        let x = document.createElement("option");
        (x.value = "true"), (x.innerHTML = "Sim"), P.appendChild(x), M.appendChild(P), M.appendChild(document.createElement("br")), M.appendChild(document.createElement("br"));
        let O = document.createElement("span");
        (O.id = "PaiErrorSection"), u.appendChild(O);
        let k = document.createElement("span");
        (k.id = "PaiAdvancedOptionsSectionBody"), u.appendChild(k), t.appendChild(u);
        let A = document.createElement("span");
        A.id = "ProbabilidadesSection";
        let $ = document.createElement("h2");
        ($.innerHTML = "Probabilidade de Pelagens"), A.appendChild($);
        let N = document.createElement("p");
        (N.innerHTML = "Abaixo estão as possíveis probabilidades de cores de pelagem da prole, determinadas utilizando as informações fornecidas sobre os pais. <br><br>Para obter uma estimativa mais precisa, forneça o máximo de informações genéticas de cor dos pais, sendo que quanto mais detalhes genéticos forem conhecidos, mais preciso será o cálculo."), A.appendChild(N);
        let w = document.createElement("span");
        (w.id = "ProbabilidadesSectionBody"), A.appendChild(w);
        let D = document.createElement("span");
        (D.id = "elapsedTime"), A.appendChild(D), e.appendChild(t), e.appendChild(A);
    })(),

        (function () {
            function e(e, t) {
                let n = e.getElementsByTagName("input"),
                    l = {};
                for (let a = 0; a < n.length; a++) {
                    let d = n[a];
                    "hidden" == d.type ? (l[d.name.replace(t, "")] = d.value) : "radio" == d.type && d.checked && (l[d.name.replace(t, "")] = d.value);
                }
                return l;
            }

            function t() {
                let t = new Date(),
                    n = e(document.getElementById("MaeAdvancedOptionsSectionBody"), "Mae"),
                    l = e(document.getElementById("PaiAdvancedOptionsSectionBody"), "Pai"),
                    a = document.getElementById("ProbabilidadesSectionBody");

                a.innerHTML = "";

                const results = PelagemPrincipal.calculaPelo(n, l);

                //Mapeamento das imagens
                
                const colorToImageUrl = {
                    "Alazão (Sorrel)": "./img/Fotos/Calculadora/Alazão.jpg" // ok!
                    ,"Castanho": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Preto": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Palomino": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Baio": "./img/Fotos/Calculadora/Baio.jpg" //ok!
                    ,"Lobuno": "./img/Fotos/Calculadora/Lobuno.jpg" //ok!
                    ,"Preto Esfumado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Cremello": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Perlino": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Creme Esfumado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Castanho Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Negro Prateado (Silver Dapple)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Baio Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Preto Esfumado Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Perlino Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Creme Esfumado Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Alazão Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Castanho Dun (Zebra Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Dunalino": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Dunskin (Baio Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Lobuno Esfumado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Cremello Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Perlino Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Creme Dun Esfumado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Alazão": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Castanho": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho Negro": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Palomino": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Baio": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Preto Esfumado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Castanho Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Negro Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Alazão Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Castanho Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Lobuno": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho Dunalino": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho Dunskin": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Lobuno Esfumado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Castanho Dun Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Lobuno Prateado (Negro Dun Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Marfim": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Âmbar": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Clássico": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Marfim Creme": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Âmbar Creme": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Clássico Creme": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Marfim Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Âmbar Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Clássico Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Marfim Creme Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Âmbar Creme Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Clássico Creme Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Âmbar Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Clássico Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Âmbar Creme Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Champagne Clássico Creme Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Alazão Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Castanho Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Negro Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Palomino Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Baio Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Preto Esfumado Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Ouro Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Âmbar Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Pérola Clássico": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Castanho Pérola Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Negro Pérola Prateado (Silver Dapple)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Baio Pérola Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Preto Esfumado Pérola Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Âmbar Pérola Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Pérola Clássico Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Alazão Pérola Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Castanho Pérola Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Lobuno Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Dunalino Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Dunskin Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Lobuno Esfumado Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Ouro Pérola Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Âmbar Pérola Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Pérola Clássico Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Alazão Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Castanho Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Negro Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Palomino Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Baio Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Preto Esfumado Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Castanho Pérola Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Negro Pérola Prateado": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Alazão Pérola Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Castanho Pérola Dun": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho de Lobuno Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho Dunalino Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Rosilho Dunskin Pérola": "./img/Fotos/Calculadora/Construcao.jpg"
                    
                    /* Tordilhos */
                    
                    ,"Tordilho (Alazão (Sorrel))": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Castanho)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Preto)": "./img/Fotos/Calculadora/Tordilho-Negro.jpg" //ok
                    ,"Tordilho (Palomino)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Baio)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Preto Esfumado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Cremello)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Perlino)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Creme Esfumado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Castanho Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Negro Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Baio Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Preto Esfumado Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Perlino Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Creme Esfumado Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Alazão Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Castanho Dun (Zebra Dun))": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Lobuno (Preto Dun))": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Dunalino (Palomino Dun))": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Dunskin (Baio Dun))": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Lobuno Esfumado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Cremello Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Perlino Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Creme Dun Esfumado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Alazão)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Castanho)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho Negro)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Palomino)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Baio)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Preto Esfumado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Castanho Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Negro Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Alazão Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Castanho Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Lobuno)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho Dunalino)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho Dunskin)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Lobuno Esfumado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Castanho Prateado Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Lobuno Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Marfim)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Âmbar)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Clássico)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Marfim Creme)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Âmbar Creme)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Clássico Creme)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Marfim Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Âmbar Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Clássico Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Marfim Creme Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Âmbar Creme Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Clássico Creme Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Âmbar Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Clássico Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Âmbar Creme Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Champagne Clássico Creme Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Alazão Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Castanho Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Negro Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Palomino Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Baio Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Preto Esfumado Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Ouro Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Âmbar Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Pérola Clássico)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Castanho Pérola Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Negro Pérola Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Baio Pérola Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Preto Esfumado Pérola Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Âmbar Pérola Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Pérola Clássico Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Alazão Pérola Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Castanho Pérola Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Lobuno Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Dunalino Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Dunskin Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Lobuno Esfumado Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Ouro Pérola Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Âmbar Pérola Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Pérola Clássico Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Alazão Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Castanho Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Negro Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Palomino Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Baio Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Preto Esfumado Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Castanho Pérola Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Negro Pérola Prateado)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Alazão Pérola Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Castanho Pérola Dun)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho de Lobuno Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho Dunalino Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    ,"Tordilho (Rosilho Dunskin Pérola)": "./img/Fotos/Calculadora/Construcao.jpg"
                    // Adicione mais mapeamentos de cor para URL conforme necessário
                };

                results.forEach((e, index) => {
                    let collapsibleButton = document.createElement("button");
                    collapsibleButton.innerHTML = (100 * e.sumTotP).toFixed(2) + "% - " + e.color;
                    collapsibleButton.className = "hccc-collapsible";
                    collapsibleButton.type = "button";

                    let collapsibleContent = document.createElement("div");
                    collapsibleContent.className = "hccc-content";

                    e.entries.forEach((entry) => {
                        let pElement = document.createElement("p");
                        pElement.innerHTML = entry.Codigo + " = " + (100 * entry.TotP).toFixed(4) + "%";
                        collapsibleContent.appendChild(pElement);
                    });
                    
                    let imageButton = document.createElement("button");
                    imageButton.innerHTML = "Mostrar Imagem";
                    imageButton.className = "show-image-button hidden";
                    imageButton.addEventListener("click", function () {
                        showImage(index);
                    });
                    

                    let imageElement = document.createElement("img");
                    imageElement.className = "animal-image hidden";
                    imageElement.id = "foto-cavalo-" + index;

                    if (colorToImageUrl[e.color]) {
                        imageElement.src = colorToImageUrl[e.color];
                    }

                    let container = document.createElement("div");
                    container.appendChild(collapsibleButton);
                    container.appendChild(collapsibleContent);
                    container.appendChild(imageButton);
                    container.appendChild(imageElement);
                    container.appendChild(document.createElement("br"));

                    a.appendChild(container);

                    collapsibleButton.addEventListener("click", function () {
                        this.classList.toggle("hccc-active");
                        let content = this.nextElementSibling;
                        if (content.style.maxHeight) {
                            content.style.maxHeight = null;
                        } else {
                            content.style.maxHeight = content.scrollHeight + "px";
                        }
                    
                        let imageButton = this.parentElement.querySelector(".show-image-button");
                        const imageElement = document.getElementById("foto-cavalo-" + index);
                        if (this.classList.contains("hccc-active")) {
                            imageButton.classList.remove("hidden");
                        } else {
                            imageButton.classList.add("hidden");
                            imageElement.classList.add("hidden");
                        }
                    });
                });

                let d = new Date(),
                    r = d - t;
            }

            function showImage(index) {
                const imageElement = document.getElementById("foto-cavalo-" + index);

                if (imageElement.classList.contains("hidden")) {
                    imageElement.classList.remove("hidden");
                } else {
                    imageElement.classList.add("hidden");
                }
            }

            function n(e, n, l, a) {
                let d = PelagemPrincipal.getCoresPadroesEPossiveisOpcoes(l);
                (e.innerHTML = ""),
                    (n.innerHTML = ""),
                    d.error
                        ? ((n.innerHTML = d.error.message), (document.getElementById("elapsedTime").innerHTML = ""))
                        : d.forEach((n) => {
                            if (n.title) {
                                let l = document.createElement("label");
                                (l.innerHTML = n.title), e.appendChild(l), e.appendChild(document.createElement("br")), e.appendChild(document.createElement("br"));
                            }
                            n.options.forEach((l) => {
                                if ("hidden" == l.type) {
                                    let d = document.createElement("input");
                                    (d.type = "hidden"), (d.value = l.value), (d.name = n.color + a), e.appendChild(d);
                                } else if ("radio" == l.type) {
                                    let r = document.createElement("label");
                                    (r.className = "hccc-container"), (r.innerHTML = l.label);
                                    let i = document.createElement("input");
                                    (i.type = "radio"), (i.value = l.value), (i.name = n.color + a), (i.checked = l.checked ? "checked" : void 0), i.addEventListener("change", () => t()), r.appendChild(i);
                                    let p = document.createElement("span");
                                    (p.className = "hccc-checkmark"), r.appendChild(p), e.appendChild(r);
                                }
                            }),
                                n.title && e.appendChild(document.createElement("br"));
                        });
            }

            function l() {
                n(
                    document.getElementById("MaeAdvancedOptionsSectionBody"),
                    document.getElementById("MaeErrorSection"),
                    { colorId: document.getElementById("MaeColor").value, PadraoId: document.getElementById("MaePadrao").value, isTordilho: "true" == document.getElementById("MaeTordilho").value },
                    "Mae"
                );
            }

            function a() {
                n(
                    document.getElementById("PaiAdvancedOptionsSectionBody"),
                    document.getElementById("PaiErrorSection"),
                    { colorId: document.getElementById("PaiColor").value, PadraoId: document.getElementById("PaiPadrao").value, isTordilho: "true" == document.getElementById("PaiTordilho").value },
                    "Pai"
                );
            }

            PelagemPrincipal.getColorOptions().forEach((e) => {
                let t = document.createElement("option");
                (t.text = e.label), (t.value = e.value);
                let n = document.getElementById("MaeColor");
                n.appendChild(t);
                let l = document.createElement("option");
                (l.text = e.label), (l.value = e.value);
                let a = document.getElementById("PaiColor");
                a.appendChild(l);
            });

            PelagemPrincipal.getPadraoOptions().forEach((e) => {
                let t = document.createElement("option");
                (t.text = e.label), (t.value = e.value);
                let n = document.getElementById("MaePadrao");
                n.appendChild(t);
                let l = document.createElement("option");
                (l.text = e.label), (l.value = e.value);
                let a = document.getElementById("PaiPadrao");
                a.appendChild(l);
            });

            document.getElementById("MaeColor").addEventListener("change", () => {
                l();
                t();
            });
            document.getElementById("MaePadrao").addEventListener("change", () => {
                l();
                t();
            });
            document.getElementById("MaeTordilho").addEventListener("change", () => {
                l();
                t();
            });
            document.getElementById("PaiColor").addEventListener("change", () => {
                a();
                t();
            });
            document.getElementById("PaiPadrao").addEventListener("change", () => {
                a();
                t();
            });
            document.getElementById("PaiTordilho").addEventListener("change", () => {
                a();
                t();
            });

            l();
            a();
            t();
        })();

})();