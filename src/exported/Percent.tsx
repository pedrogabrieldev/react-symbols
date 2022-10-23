import IconPercentFill0Wght100Grad0Opsz48 from '../components/PercentFill0Wght100Grad0Opsz48'
import IconPercentFill0Wght200Grad0Opsz48 from '../components/PercentFill0Wght200Grad0Opsz48'
import IconPercentFill0Wght300Grad0Opsz48 from '../components/PercentFill0Wght300Grad0Opsz48'
import IconPercentFill0Wght400Grad0Opsz48 from '../components/PercentFill0Wght400Grad0Opsz48'
import IconPercentFill0Wght500Grad0Opsz48 from '../components/PercentFill0Wght500Grad0Opsz48'
import IconPercentFill0Wght600Grad0Opsz48 from '../components/PercentFill0Wght600Grad0Opsz48'
import IconPercentFill0Wght700Grad0Opsz48 from '../components/PercentFill0Wght700Grad0Opsz48'
import IconPercentFill1Wght100Grad0Opsz48 from '../components/PercentFill1Wght100Grad0Opsz48'
import IconPercentFill1Wght200Grad0Opsz48 from '../components/PercentFill1Wght200Grad0Opsz48'
import IconPercentFill1Wght300Grad0Opsz48 from '../components/PercentFill1Wght300Grad0Opsz48'
import IconPercentFill1Wght400Grad0Opsz48 from '../components/PercentFill1Wght400Grad0Opsz48'
import IconPercentFill1Wght500Grad0Opsz48 from '../components/PercentFill1Wght500Grad0Opsz48'
import IconPercentFill1Wght600Grad0Opsz48 from '../components/PercentFill1Wght600Grad0Opsz48'
import IconPercentFill1Wght700Grad0Opsz48 from '../components/PercentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPercent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPercentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPercentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPercentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPercentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPercentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPercentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPercentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPercentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPercentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPercentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPercentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPercentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPercentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPercentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
