type Estado = string;
type Faturamentos = Record<Estado, number>;

export function percentualDeParticipacao(faturamentos: Faturamentos) {
  const total = Object.values(faturamentos).reduce(
    (acc, valor) => acc + valor,
    0
  );

  const percentuais = Object.fromEntries(
    Object.entries(faturamentos).map(([estado, valor]) => [
      estado,
      valor / total,
    ])
  );

  return percentuais;
}
