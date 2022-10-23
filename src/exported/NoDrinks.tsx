import IconNoDrinksFill0Wght100Grad0Opsz48 from '../components/NoDrinksFill0Wght100Grad0Opsz48'
import IconNoDrinksFill0Wght200Grad0Opsz48 from '../components/NoDrinksFill0Wght200Grad0Opsz48'
import IconNoDrinksFill0Wght300Grad0Opsz48 from '../components/NoDrinksFill0Wght300Grad0Opsz48'
import IconNoDrinksFill0Wght400Grad0Opsz48 from '../components/NoDrinksFill0Wght400Grad0Opsz48'
import IconNoDrinksFill0Wght500Grad0Opsz48 from '../components/NoDrinksFill0Wght500Grad0Opsz48'
import IconNoDrinksFill0Wght600Grad0Opsz48 from '../components/NoDrinksFill0Wght600Grad0Opsz48'
import IconNoDrinksFill0Wght700Grad0Opsz48 from '../components/NoDrinksFill0Wght700Grad0Opsz48'
import IconNoDrinksFill1Wght100Grad0Opsz48 from '../components/NoDrinksFill1Wght100Grad0Opsz48'
import IconNoDrinksFill1Wght200Grad0Opsz48 from '../components/NoDrinksFill1Wght200Grad0Opsz48'
import IconNoDrinksFill1Wght300Grad0Opsz48 from '../components/NoDrinksFill1Wght300Grad0Opsz48'
import IconNoDrinksFill1Wght400Grad0Opsz48 from '../components/NoDrinksFill1Wght400Grad0Opsz48'
import IconNoDrinksFill1Wght500Grad0Opsz48 from '../components/NoDrinksFill1Wght500Grad0Opsz48'
import IconNoDrinksFill1Wght600Grad0Opsz48 from '../components/NoDrinksFill1Wght600Grad0Opsz48'
import IconNoDrinksFill1Wght700Grad0Opsz48 from '../components/NoDrinksFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoDrinks = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoDrinksFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoDrinksFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoDrinksFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoDrinksFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoDrinksFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoDrinksFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoDrinksFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoDrinksFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoDrinksFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoDrinksFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoDrinksFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoDrinksFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoDrinksFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoDrinksFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
