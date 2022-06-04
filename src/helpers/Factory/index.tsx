import Card, { Props as CardProps } from "@/components/Card";
import Title from "@/components/Title";

export type CardType = {
  card: CardProps;
  title: string;
};

export const newCard = (type: CardType) => {
  return (
    <Card {...type.card}>
      <Title size="h4">{type.title}</Title>
    </Card>
  );
};
