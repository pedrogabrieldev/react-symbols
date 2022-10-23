import IconPrintFill0Wght100Grad0Opsz48 from '../components/PrintFill0Wght100Grad0Opsz48'
import IconPrintFill0Wght200Grad0Opsz48 from '../components/PrintFill0Wght200Grad0Opsz48'
import IconPrintFill0Wght300Grad0Opsz48 from '../components/PrintFill0Wght300Grad0Opsz48'
import IconPrintFill0Wght400Grad0Opsz48 from '../components/PrintFill0Wght400Grad0Opsz48'
import IconPrintFill0Wght500Grad0Opsz48 from '../components/PrintFill0Wght500Grad0Opsz48'
import IconPrintFill0Wght600Grad0Opsz48 from '../components/PrintFill0Wght600Grad0Opsz48'
import IconPrintFill0Wght700Grad0Opsz48 from '../components/PrintFill0Wght700Grad0Opsz48'
import IconPrintFill1Wght100Grad0Opsz48 from '../components/PrintFill1Wght100Grad0Opsz48'
import IconPrintFill1Wght200Grad0Opsz48 from '../components/PrintFill1Wght200Grad0Opsz48'
import IconPrintFill1Wght300Grad0Opsz48 from '../components/PrintFill1Wght300Grad0Opsz48'
import IconPrintFill1Wght400Grad0Opsz48 from '../components/PrintFill1Wght400Grad0Opsz48'
import IconPrintFill1Wght500Grad0Opsz48 from '../components/PrintFill1Wght500Grad0Opsz48'
import IconPrintFill1Wght600Grad0Opsz48 from '../components/PrintFill1Wght600Grad0Opsz48'
import IconPrintFill1Wght700Grad0Opsz48 from '../components/PrintFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPrint = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPrintFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPrintFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPrintFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPrintFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPrintFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPrintFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPrintFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPrintFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPrintFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPrintFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPrintFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPrintFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPrintFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPrintFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
