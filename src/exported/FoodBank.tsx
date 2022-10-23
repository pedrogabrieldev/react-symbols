import IconFoodBankFill0Wght100Grad0Opsz48 from '../components/FoodBankFill0Wght100Grad0Opsz48'
import IconFoodBankFill0Wght200Grad0Opsz48 from '../components/FoodBankFill0Wght200Grad0Opsz48'
import IconFoodBankFill0Wght300Grad0Opsz48 from '../components/FoodBankFill0Wght300Grad0Opsz48'
import IconFoodBankFill0Wght400Grad0Opsz48 from '../components/FoodBankFill0Wght400Grad0Opsz48'
import IconFoodBankFill0Wght500Grad0Opsz48 from '../components/FoodBankFill0Wght500Grad0Opsz48'
import IconFoodBankFill0Wght600Grad0Opsz48 from '../components/FoodBankFill0Wght600Grad0Opsz48'
import IconFoodBankFill0Wght700Grad0Opsz48 from '../components/FoodBankFill0Wght700Grad0Opsz48'
import IconFoodBankFill1Wght100Grad0Opsz48 from '../components/FoodBankFill1Wght100Grad0Opsz48'
import IconFoodBankFill1Wght200Grad0Opsz48 from '../components/FoodBankFill1Wght200Grad0Opsz48'
import IconFoodBankFill1Wght300Grad0Opsz48 from '../components/FoodBankFill1Wght300Grad0Opsz48'
import IconFoodBankFill1Wght400Grad0Opsz48 from '../components/FoodBankFill1Wght400Grad0Opsz48'
import IconFoodBankFill1Wght500Grad0Opsz48 from '../components/FoodBankFill1Wght500Grad0Opsz48'
import IconFoodBankFill1Wght600Grad0Opsz48 from '../components/FoodBankFill1Wght600Grad0Opsz48'
import IconFoodBankFill1Wght700Grad0Opsz48 from '../components/FoodBankFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFoodBank = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFoodBankFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFoodBankFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFoodBankFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFoodBankFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFoodBankFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFoodBankFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFoodBankFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFoodBankFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFoodBankFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFoodBankFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFoodBankFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFoodBankFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFoodBankFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFoodBankFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
