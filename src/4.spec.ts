import { percentualDeParticipacao } from "./4"; // Ajuste o caminho conforme necessário

describe("percentualDeParticipacao", () => {
  const faturamentos = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  it("Deverá calcular corretamente os percentuais de participação", () => {
    const percentuais = percentualDeParticipacao(faturamentos);
    const faturamentoTotal = Object.values(faturamentos).reduce(
      (acc, valor) => acc + valor,
      0
    );

    // Verificar se o faturamento total é calculado corretamente
    expect(faturamentoTotal).toBeCloseTo(180759.98, 2);

    // Verificar os percentuais individuais
    expect(percentuais.SP).toBeCloseTo(67836.43 / faturamentoTotal, 2);
    expect(percentuais.RJ).toBeCloseTo(36678.66 / faturamentoTotal, 2);
    expect(percentuais.MG).toBeCloseTo(29229.88 / faturamentoTotal, 2);
    expect(percentuais.ES).toBeCloseTo(27165.48 / faturamentoTotal, 2);
    expect(percentuais.Outros).toBeCloseTo(19849.53 / faturamentoTotal, 2);
  });
});
