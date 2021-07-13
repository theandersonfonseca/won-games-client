import * as S from './styles'

import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'

const CartDropdown = () => (
  <S.Wrapper>
    <Dropdown title={<CartIcon />}>
      <CartList hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
