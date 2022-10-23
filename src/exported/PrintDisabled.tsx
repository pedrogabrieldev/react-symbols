import IconPrintDisabledFill0Wght100Grad0Opsz48 from '../components/PrintDisabledFill0Wght100Grad0Opsz48'
import IconPrintDisabledFill0Wght200Grad0Opsz48 from '../components/PrintDisabledFill0Wght200Grad0Opsz48'
import IconPrintDisabledFill0Wght300Grad0Opsz48 from '../components/PrintDisabledFill0Wght300Grad0Opsz48'
import IconPrintDisabledFill0Wght400Grad0Opsz48 from '../components/PrintDisabledFill0Wght400Grad0Opsz48'
import IconPrintDisabledFill0Wght500Grad0Opsz48 from '../components/PrintDisabledFill0Wght500Grad0Opsz48'
import IconPrintDisabledFill0Wght600Grad0Opsz48 from '../components/PrintDisabledFill0Wght600Grad0Opsz48'
import IconPrintDisabledFill0Wght700Grad0Opsz48 from '../components/PrintDisabledFill0Wght700Grad0Opsz48'
import IconPrintDisabledFill1Wght100Grad0Opsz48 from '../components/PrintDisabledFill1Wght100Grad0Opsz48'
import IconPrintDisabledFill1Wght200Grad0Opsz48 from '../components/PrintDisabledFill1Wght200Grad0Opsz48'
import IconPrintDisabledFill1Wght300Grad0Opsz48 from '../components/PrintDisabledFill1Wght300Grad0Opsz48'
import IconPrintDisabledFill1Wght400Grad0Opsz48 from '../components/PrintDisabledFill1Wght400Grad0Opsz48'
import IconPrintDisabledFill1Wght500Grad0Opsz48 from '../components/PrintDisabledFill1Wght500Grad0Opsz48'
import IconPrintDisabledFill1Wght600Grad0Opsz48 from '../components/PrintDisabledFill1Wght600Grad0Opsz48'
import IconPrintDisabledFill1Wght700Grad0Opsz48 from '../components/PrintDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPrintDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPrintDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPrintDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPrintDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPrintDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPrintDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPrintDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPrintDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPrintDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPrintDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPrintDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPrintDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPrintDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPrintDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPrintDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
