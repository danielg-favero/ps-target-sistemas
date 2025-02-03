type FaturamentoDia = {
  dia: number;
  valor: number;
};

type FaturamentoMes = Array<FaturamentoDia>;

export function pegarFaturamentosPorDia(faturamentoMes: FaturamentoMes) {
  return faturamentoMes
    .map((dia) => dia.valor)
    .filter((faturamento) => faturamento > 0.0);
}

export function pegarMediaFaturamento(faturamentoMes: FaturamentoMes) {
  let soma = 0;
  const faturamentosPorDia = pegarFaturamentosPorDia(faturamentoMes);

  if (!faturamentosPorDia.length) return 0;

  for (const faturamentoPorDia of faturamentosPorDia) {
    soma += faturamentoPorDia;
  }

  const media = soma / faturamentosPorDia.length;
  return media;
}

export function pegarMenorFaturamento(faturamentoMes: FaturamentoMes) {
  return Math.min(...pegarFaturamentosPorDia(faturamentoMes));
}

export function pegarMaiorFaturamento(faturamentoMes: FaturamentoMes) {
  return Math.max(...pegarFaturamentosPorDia(faturamentoMes));
}

export function pegarFaturamentosAcimaDaMedia(faturamentoMes: FaturamentoMes) {
  const media = pegarMediaFaturamento(faturamentoMes);
  return faturamentoMes.filter((faturamento) => faturamento.valor > media);
}
