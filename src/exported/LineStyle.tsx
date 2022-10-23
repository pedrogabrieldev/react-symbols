import IconLineStyleFill0Wght100Grad0Opsz48 from '../components/LineStyleFill0Wght100Grad0Opsz48'
import IconLineStyleFill0Wght200Grad0Opsz48 from '../components/LineStyleFill0Wght200Grad0Opsz48'
import IconLineStyleFill0Wght300Grad0Opsz48 from '../components/LineStyleFill0Wght300Grad0Opsz48'
import IconLineStyleFill0Wght400Grad0Opsz48 from '../components/LineStyleFill0Wght400Grad0Opsz48'
import IconLineStyleFill0Wght500Grad0Opsz48 from '../components/LineStyleFill0Wght500Grad0Opsz48'
import IconLineStyleFill0Wght600Grad0Opsz48 from '../components/LineStyleFill0Wght600Grad0Opsz48'
import IconLineStyleFill0Wght700Grad0Opsz48 from '../components/LineStyleFill0Wght700Grad0Opsz48'
import IconLineStyleFill1Wght100Grad0Opsz48 from '../components/LineStyleFill1Wght100Grad0Opsz48'
import IconLineStyleFill1Wght200Grad0Opsz48 from '../components/LineStyleFill1Wght200Grad0Opsz48'
import IconLineStyleFill1Wght300Grad0Opsz48 from '../components/LineStyleFill1Wght300Grad0Opsz48'
import IconLineStyleFill1Wght400Grad0Opsz48 from '../components/LineStyleFill1Wght400Grad0Opsz48'
import IconLineStyleFill1Wght500Grad0Opsz48 from '../components/LineStyleFill1Wght500Grad0Opsz48'
import IconLineStyleFill1Wght600Grad0Opsz48 from '../components/LineStyleFill1Wght600Grad0Opsz48'
import IconLineStyleFill1Wght700Grad0Opsz48 from '../components/LineStyleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLineStyle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLineStyleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLineStyleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLineStyleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLineStyleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLineStyleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLineStyleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLineStyleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLineStyleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLineStyleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLineStyleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLineStyleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLineStyleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLineStyleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLineStyleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
