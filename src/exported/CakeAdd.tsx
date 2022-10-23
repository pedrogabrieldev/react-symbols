import IconCakeAddFill0Wght100Grad0Opsz48 from '../components/CakeAddFill0Wght100Grad0Opsz48'
import IconCakeAddFill0Wght200Grad0Opsz48 from '../components/CakeAddFill0Wght200Grad0Opsz48'
import IconCakeAddFill0Wght300Grad0Opsz48 from '../components/CakeAddFill0Wght300Grad0Opsz48'
import IconCakeAddFill0Wght400Grad0Opsz48 from '../components/CakeAddFill0Wght400Grad0Opsz48'
import IconCakeAddFill0Wght500Grad0Opsz48 from '../components/CakeAddFill0Wght500Grad0Opsz48'
import IconCakeAddFill0Wght600Grad0Opsz48 from '../components/CakeAddFill0Wght600Grad0Opsz48'
import IconCakeAddFill0Wght700Grad0Opsz48 from '../components/CakeAddFill0Wght700Grad0Opsz48'
import IconCakeAddFill1Wght100Grad0Opsz48 from '../components/CakeAddFill1Wght100Grad0Opsz48'
import IconCakeAddFill1Wght200Grad0Opsz48 from '../components/CakeAddFill1Wght200Grad0Opsz48'
import IconCakeAddFill1Wght300Grad0Opsz48 from '../components/CakeAddFill1Wght300Grad0Opsz48'
import IconCakeAddFill1Wght400Grad0Opsz48 from '../components/CakeAddFill1Wght400Grad0Opsz48'
import IconCakeAddFill1Wght500Grad0Opsz48 from '../components/CakeAddFill1Wght500Grad0Opsz48'
import IconCakeAddFill1Wght600Grad0Opsz48 from '../components/CakeAddFill1Wght600Grad0Opsz48'
import IconCakeAddFill1Wght700Grad0Opsz48 from '../components/CakeAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCakeAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCakeAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCakeAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCakeAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCakeAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCakeAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCakeAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCakeAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCakeAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCakeAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCakeAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCakeAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCakeAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCakeAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCakeAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
