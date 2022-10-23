import IconReceiptLongFill0Wght100Grad0Opsz48 from '../components/ReceiptLongFill0Wght100Grad0Opsz48'
import IconReceiptLongFill0Wght200Grad0Opsz48 from '../components/ReceiptLongFill0Wght200Grad0Opsz48'
import IconReceiptLongFill0Wght300Grad0Opsz48 from '../components/ReceiptLongFill0Wght300Grad0Opsz48'
import IconReceiptLongFill0Wght400Grad0Opsz48 from '../components/ReceiptLongFill0Wght400Grad0Opsz48'
import IconReceiptLongFill0Wght500Grad0Opsz48 from '../components/ReceiptLongFill0Wght500Grad0Opsz48'
import IconReceiptLongFill0Wght600Grad0Opsz48 from '../components/ReceiptLongFill0Wght600Grad0Opsz48'
import IconReceiptLongFill0Wght700Grad0Opsz48 from '../components/ReceiptLongFill0Wght700Grad0Opsz48'
import IconReceiptLongFill1Wght100Grad0Opsz48 from '../components/ReceiptLongFill1Wght100Grad0Opsz48'
import IconReceiptLongFill1Wght200Grad0Opsz48 from '../components/ReceiptLongFill1Wght200Grad0Opsz48'
import IconReceiptLongFill1Wght300Grad0Opsz48 from '../components/ReceiptLongFill1Wght300Grad0Opsz48'
import IconReceiptLongFill1Wght400Grad0Opsz48 from '../components/ReceiptLongFill1Wght400Grad0Opsz48'
import IconReceiptLongFill1Wght500Grad0Opsz48 from '../components/ReceiptLongFill1Wght500Grad0Opsz48'
import IconReceiptLongFill1Wght600Grad0Opsz48 from '../components/ReceiptLongFill1Wght600Grad0Opsz48'
import IconReceiptLongFill1Wght700Grad0Opsz48 from '../components/ReceiptLongFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconReceiptLong = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconReceiptLongFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconReceiptLongFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconReceiptLongFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconReceiptLongFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconReceiptLongFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconReceiptLongFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconReceiptLongFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconReceiptLongFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconReceiptLongFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconReceiptLongFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconReceiptLongFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconReceiptLongFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconReceiptLongFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconReceiptLongFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
