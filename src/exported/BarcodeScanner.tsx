import IconBarcodeScannerFill0Wght100Grad0Opsz48 from '../components/BarcodeScannerFill0Wght100Grad0Opsz48'
import IconBarcodeScannerFill0Wght200Grad0Opsz48 from '../components/BarcodeScannerFill0Wght200Grad0Opsz48'
import IconBarcodeScannerFill0Wght300Grad0Opsz48 from '../components/BarcodeScannerFill0Wght300Grad0Opsz48'
import IconBarcodeScannerFill0Wght400Grad0Opsz48 from '../components/BarcodeScannerFill0Wght400Grad0Opsz48'
import IconBarcodeScannerFill0Wght500Grad0Opsz48 from '../components/BarcodeScannerFill0Wght500Grad0Opsz48'
import IconBarcodeScannerFill0Wght600Grad0Opsz48 from '../components/BarcodeScannerFill0Wght600Grad0Opsz48'
import IconBarcodeScannerFill0Wght700Grad0Opsz48 from '../components/BarcodeScannerFill0Wght700Grad0Opsz48'
import IconBarcodeScannerFill1Wght100Grad0Opsz48 from '../components/BarcodeScannerFill1Wght100Grad0Opsz48'
import IconBarcodeScannerFill1Wght200Grad0Opsz48 from '../components/BarcodeScannerFill1Wght200Grad0Opsz48'
import IconBarcodeScannerFill1Wght300Grad0Opsz48 from '../components/BarcodeScannerFill1Wght300Grad0Opsz48'
import IconBarcodeScannerFill1Wght400Grad0Opsz48 from '../components/BarcodeScannerFill1Wght400Grad0Opsz48'
import IconBarcodeScannerFill1Wght500Grad0Opsz48 from '../components/BarcodeScannerFill1Wght500Grad0Opsz48'
import IconBarcodeScannerFill1Wght600Grad0Opsz48 from '../components/BarcodeScannerFill1Wght600Grad0Opsz48'
import IconBarcodeScannerFill1Wght700Grad0Opsz48 from '../components/BarcodeScannerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBarcodeScanner = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBarcodeScannerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBarcodeScannerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBarcodeScannerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBarcodeScannerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBarcodeScannerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBarcodeScannerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBarcodeScannerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBarcodeScannerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBarcodeScannerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBarcodeScannerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBarcodeScannerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBarcodeScannerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBarcodeScannerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBarcodeScannerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
