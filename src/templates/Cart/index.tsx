import * as S from './styles'

import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import CartList, { CartListProps } from 'components/CartList'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

export type CartProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
  cards
}: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />

          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </S.Content>

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
