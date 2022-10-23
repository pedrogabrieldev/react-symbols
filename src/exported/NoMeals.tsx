import IconNoMealsFill0Wght100Grad0Opsz48 from '../components/NoMealsFill0Wght100Grad0Opsz48'
import IconNoMealsFill0Wght200Grad0Opsz48 from '../components/NoMealsFill0Wght200Grad0Opsz48'
import IconNoMealsFill0Wght300Grad0Opsz48 from '../components/NoMealsFill0Wght300Grad0Opsz48'
import IconNoMealsFill0Wght400Grad0Opsz48 from '../components/NoMealsFill0Wght400Grad0Opsz48'
import IconNoMealsFill0Wght500Grad0Opsz48 from '../components/NoMealsFill0Wght500Grad0Opsz48'
import IconNoMealsFill0Wght600Grad0Opsz48 from '../components/NoMealsFill0Wght600Grad0Opsz48'
import IconNoMealsFill0Wght700Grad0Opsz48 from '../components/NoMealsFill0Wght700Grad0Opsz48'
import IconNoMealsFill1Wght100Grad0Opsz48 from '../components/NoMealsFill1Wght100Grad0Opsz48'
import IconNoMealsFill1Wght200Grad0Opsz48 from '../components/NoMealsFill1Wght200Grad0Opsz48'
import IconNoMealsFill1Wght300Grad0Opsz48 from '../components/NoMealsFill1Wght300Grad0Opsz48'
import IconNoMealsFill1Wght400Grad0Opsz48 from '../components/NoMealsFill1Wght400Grad0Opsz48'
import IconNoMealsFill1Wght500Grad0Opsz48 from '../components/NoMealsFill1Wght500Grad0Opsz48'
import IconNoMealsFill1Wght600Grad0Opsz48 from '../components/NoMealsFill1Wght600Grad0Opsz48'
import IconNoMealsFill1Wght700Grad0Opsz48 from '../components/NoMealsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoMeals = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoMealsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoMealsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoMealsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoMealsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoMealsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoMealsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoMealsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoMealsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoMealsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoMealsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoMealsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoMealsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoMealsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoMealsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
