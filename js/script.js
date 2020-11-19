
/*
Salário-de-contribuição	Alíquota para recolhimento ao INSS
até R$ 1.045,00	7,50%
de R$ 1.045,01 até R$ 2.089,60	9%
de R$ 2.089,61 até R$ 3.134,40	12% 
de R$ 3.134,41 até R$ 6.101,06	14% 

Faixas	Valor Inicial	 Valor Limite 	Alíquota	Diferença entre alíquotas	Valor % x Limite de Cada Faixa	Parcela a Deduzir
Faixa 1	 R$         1.045,00	 R$   1.045,00	7,50%	1,5%	15,68	0,00
Faixa 2	 R$         1.045,01	 R$   2.089,60	9%	3,0%	62,69	R$ 15,68
Faixa 3	 R$         2.089,61	 R$   3.134,40	12%	2,0%	62,69	R$ 78,37
Faixa 4	 R$         3.134,41	 R$   6.101,06	14%	0,0%	0,00	R$ 141,06
*/

/*cálculo INSS*/
function valorINSS (bruto, tab1, tab2, tab3, tab4, aliq1, aliq2, aliq3, aliq4, inss) {

  /*faixas e aliquotas da Tabela de INSS mais atual, no momento 03/2020*/
  tab1 = 1045.00
  aliq1 = 0.075
  tab2 = 2089.60
  aliq2 = 0.09
  tab3 = 3134.40
  aliq3 = 0.12
  tab4 = 6101.06
  aliq4 = 0.14
  /*-------------------------Fim da tabela------*/
  bruto = document.getElementById('salario-bruto').value

  if (bruto <= tab1) {
    inss = (bruto * aliq1)
  }

  else if (bruto > tab1 && bruto <= tab2){
    inss = (
      (tab1 * aliq1)+
      ((bruto - tab1) * aliq2))
  }

  else if (bruto > tab2 && bruto <= tab3){ 
    inss =(
      (tab1 * aliq1)+   
      ((tab2 - tab1) * aliq2) +  
      ((bruto - tab2) * aliq3)
    )
  }

  else if(bruto > tab3 && bruto <= tab4){
    inss =(
      (tab1 * aliq1)+   
      ((tab2 - tab1) * aliq2) +
      ((tab3 - tab2) * aliq3) +
      ((bruto - tab3) * aliq4)
  )
  }
  else {
    inss = 713.09
  }

document.getElementById('valor-devido-inss').innerHTML = `O Valor a ser descontado é de: R$${inss.toFixed(2)}`
}

/*cálculo IRRF*/
/*
Valor por dependente = R$ 189,59
Base de Cálculo             Alíquota (%)   Parcela a Deduzir do IR (R$)
Até 1.903,98
De 1.903,99 até 2.826,65     7,5%           142,80
De 2.826,66 até 3.751,05     15%            354,80
De 3.751,06 até 4.664,68     22,5%          636,13
Acima de 4.664,68            27,5%          869,36
*/

function valorIRRF (base, baseIR, descInss, depQtd, tab1, tab2, tab3, tab4, aliq2, aliq3, aliq4, aliq5, ded2, ded3, ded4, ded5, valDep, irrf) {

  /*faixas e aliquotas da Tabela de irrf mais atual, no momento 2015*/
  tab1 = 1903.98 
  tab2 = 2826.65
  tab3 = 3751.05
  tab4 = 4664.68

  aliq2 = 0.075
  aliq3 = 0.15
  aliq4 = 0.225
  aliq5 = 0.275

  ded2 = 142.80
  ded3 = 354.80
  ded4 = 636.13
  ded5 = 869.36

  valDep = 189.59
  /*-------------------------Fim da tabela------*/
  base = document.getElementById('base-irrf').value
  descInss = document.getElementById('inss-desc').value
  depQtd = document.getElementById('qtd-dep').value * valDep
  baseIr = base - descInss - depQtd

  if (baseIr <= tab1) {
    irrf = 0
  }

  else if (baseIr > tab1 && baseIr <= tab2){
    irrf = (baseIr * aliq2 - ded2)
  }

  else if (baseIr > tab2 && baseIr <= tab3){
    irrf = (baseIr * aliq3 - ded3)

  }
  else if (baseIr > tab3 && baseIr <= tab4){ 
    irrf = (baseIr * aliq4 - ded4)
  }
  else if(baseIr > tab4){
    irrf = (baseIr * aliq5 - ded5)
  }

document.getElementById('valor-devido-irrf').innerHTML = `O Valor a ser descontado é de: R$${irrf.toFixed(2)}`
}
