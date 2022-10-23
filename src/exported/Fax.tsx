import IconFaxFill0Wght100Grad0Opsz48 from '../components/FaxFill0Wght100Grad0Opsz48'
import IconFaxFill0Wght200Grad0Opsz48 from '../components/FaxFill0Wght200Grad0Opsz48'
import IconFaxFill0Wght300Grad0Opsz48 from '../components/FaxFill0Wght300Grad0Opsz48'
import IconFaxFill0Wght400Grad0Opsz48 from '../components/FaxFill0Wght400Grad0Opsz48'
import IconFaxFill0Wght500Grad0Opsz48 from '../components/FaxFill0Wght500Grad0Opsz48'
import IconFaxFill0Wght600Grad0Opsz48 from '../components/FaxFill0Wght600Grad0Opsz48'
import IconFaxFill0Wght700Grad0Opsz48 from '../components/FaxFill0Wght700Grad0Opsz48'
import IconFaxFill1Wght100Grad0Opsz48 from '../components/FaxFill1Wght100Grad0Opsz48'
import IconFaxFill1Wght200Grad0Opsz48 from '../components/FaxFill1Wght200Grad0Opsz48'
import IconFaxFill1Wght300Grad0Opsz48 from '../components/FaxFill1Wght300Grad0Opsz48'
import IconFaxFill1Wght400Grad0Opsz48 from '../components/FaxFill1Wght400Grad0Opsz48'
import IconFaxFill1Wght500Grad0Opsz48 from '../components/FaxFill1Wght500Grad0Opsz48'
import IconFaxFill1Wght600Grad0Opsz48 from '../components/FaxFill1Wght600Grad0Opsz48'
import IconFaxFill1Wght700Grad0Opsz48 from '../components/FaxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFax = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFaxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFaxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFaxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFaxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFaxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFaxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFaxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFaxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFaxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFaxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFaxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFaxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFaxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFaxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
