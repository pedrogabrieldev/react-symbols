import IconAutorenewFill0Wght100Grad0Opsz48 from '../components/AutorenewFill0Wght100Grad0Opsz48'
import IconAutorenewFill0Wght200Grad0Opsz48 from '../components/AutorenewFill0Wght200Grad0Opsz48'
import IconAutorenewFill0Wght300Grad0Opsz48 from '../components/AutorenewFill0Wght300Grad0Opsz48'
import IconAutorenewFill0Wght400Grad0Opsz48 from '../components/AutorenewFill0Wght400Grad0Opsz48'
import IconAutorenewFill0Wght500Grad0Opsz48 from '../components/AutorenewFill0Wght500Grad0Opsz48'
import IconAutorenewFill0Wght600Grad0Opsz48 from '../components/AutorenewFill0Wght600Grad0Opsz48'
import IconAutorenewFill0Wght700Grad0Opsz48 from '../components/AutorenewFill0Wght700Grad0Opsz48'
import IconAutorenewFill1Wght100Grad0Opsz48 from '../components/AutorenewFill1Wght100Grad0Opsz48'
import IconAutorenewFill1Wght200Grad0Opsz48 from '../components/AutorenewFill1Wght200Grad0Opsz48'
import IconAutorenewFill1Wght300Grad0Opsz48 from '../components/AutorenewFill1Wght300Grad0Opsz48'
import IconAutorenewFill1Wght400Grad0Opsz48 from '../components/AutorenewFill1Wght400Grad0Opsz48'
import IconAutorenewFill1Wght500Grad0Opsz48 from '../components/AutorenewFill1Wght500Grad0Opsz48'
import IconAutorenewFill1Wght600Grad0Opsz48 from '../components/AutorenewFill1Wght600Grad0Opsz48'
import IconAutorenewFill1Wght700Grad0Opsz48 from '../components/AutorenewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutorenew = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutorenewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutorenewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutorenewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutorenewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutorenewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutorenewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutorenewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutorenewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutorenewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutorenewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutorenewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutorenewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutorenewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutorenewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
