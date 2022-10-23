import IconReceiptFill0Wght100Grad0Opsz48 from '../components/ReceiptFill0Wght100Grad0Opsz48'
import IconReceiptFill0Wght200Grad0Opsz48 from '../components/ReceiptFill0Wght200Grad0Opsz48'
import IconReceiptFill0Wght300Grad0Opsz48 from '../components/ReceiptFill0Wght300Grad0Opsz48'
import IconReceiptFill0Wght400Grad0Opsz48 from '../components/ReceiptFill0Wght400Grad0Opsz48'
import IconReceiptFill0Wght500Grad0Opsz48 from '../components/ReceiptFill0Wght500Grad0Opsz48'
import IconReceiptFill0Wght600Grad0Opsz48 from '../components/ReceiptFill0Wght600Grad0Opsz48'
import IconReceiptFill0Wght700Grad0Opsz48 from '../components/ReceiptFill0Wght700Grad0Opsz48'
import IconReceiptFill1Wght100Grad0Opsz48 from '../components/ReceiptFill1Wght100Grad0Opsz48'
import IconReceiptFill1Wght200Grad0Opsz48 from '../components/ReceiptFill1Wght200Grad0Opsz48'
import IconReceiptFill1Wght300Grad0Opsz48 from '../components/ReceiptFill1Wght300Grad0Opsz48'
import IconReceiptFill1Wght400Grad0Opsz48 from '../components/ReceiptFill1Wght400Grad0Opsz48'
import IconReceiptFill1Wght500Grad0Opsz48 from '../components/ReceiptFill1Wght500Grad0Opsz48'
import IconReceiptFill1Wght600Grad0Opsz48 from '../components/ReceiptFill1Wght600Grad0Opsz48'
import IconReceiptFill1Wght700Grad0Opsz48 from '../components/ReceiptFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconReceipt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconReceiptFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconReceiptFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconReceiptFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconReceiptFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconReceiptFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconReceiptFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconReceiptFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconReceiptFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconReceiptFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconReceiptFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconReceiptFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconReceiptFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconReceiptFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconReceiptFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
