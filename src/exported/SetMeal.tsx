import IconSetMealFill0Wght100Grad0Opsz48 from '../components/SetMealFill0Wght100Grad0Opsz48'
import IconSetMealFill0Wght200Grad0Opsz48 from '../components/SetMealFill0Wght200Grad0Opsz48'
import IconSetMealFill0Wght300Grad0Opsz48 from '../components/SetMealFill0Wght300Grad0Opsz48'
import IconSetMealFill0Wght400Grad0Opsz48 from '../components/SetMealFill0Wght400Grad0Opsz48'
import IconSetMealFill0Wght500Grad0Opsz48 from '../components/SetMealFill0Wght500Grad0Opsz48'
import IconSetMealFill0Wght600Grad0Opsz48 from '../components/SetMealFill0Wght600Grad0Opsz48'
import IconSetMealFill0Wght700Grad0Opsz48 from '../components/SetMealFill0Wght700Grad0Opsz48'
import IconSetMealFill1Wght100Grad0Opsz48 from '../components/SetMealFill1Wght100Grad0Opsz48'
import IconSetMealFill1Wght200Grad0Opsz48 from '../components/SetMealFill1Wght200Grad0Opsz48'
import IconSetMealFill1Wght300Grad0Opsz48 from '../components/SetMealFill1Wght300Grad0Opsz48'
import IconSetMealFill1Wght400Grad0Opsz48 from '../components/SetMealFill1Wght400Grad0Opsz48'
import IconSetMealFill1Wght500Grad0Opsz48 from '../components/SetMealFill1Wght500Grad0Opsz48'
import IconSetMealFill1Wght600Grad0Opsz48 from '../components/SetMealFill1Wght600Grad0Opsz48'
import IconSetMealFill1Wght700Grad0Opsz48 from '../components/SetMealFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSetMeal = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSetMealFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSetMealFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSetMealFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSetMealFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSetMealFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSetMealFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSetMealFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSetMealFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSetMealFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSetMealFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSetMealFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSetMealFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSetMealFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSetMealFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
