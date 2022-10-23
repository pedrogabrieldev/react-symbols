import IconScannerFill0Wght100Grad0Opsz48 from '../components/ScannerFill0Wght100Grad0Opsz48'
import IconScannerFill0Wght200Grad0Opsz48 from '../components/ScannerFill0Wght200Grad0Opsz48'
import IconScannerFill0Wght300Grad0Opsz48 from '../components/ScannerFill0Wght300Grad0Opsz48'
import IconScannerFill0Wght400Grad0Opsz48 from '../components/ScannerFill0Wght400Grad0Opsz48'
import IconScannerFill0Wght500Grad0Opsz48 from '../components/ScannerFill0Wght500Grad0Opsz48'
import IconScannerFill0Wght600Grad0Opsz48 from '../components/ScannerFill0Wght600Grad0Opsz48'
import IconScannerFill0Wght700Grad0Opsz48 from '../components/ScannerFill0Wght700Grad0Opsz48'
import IconScannerFill1Wght100Grad0Opsz48 from '../components/ScannerFill1Wght100Grad0Opsz48'
import IconScannerFill1Wght200Grad0Opsz48 from '../components/ScannerFill1Wght200Grad0Opsz48'
import IconScannerFill1Wght300Grad0Opsz48 from '../components/ScannerFill1Wght300Grad0Opsz48'
import IconScannerFill1Wght400Grad0Opsz48 from '../components/ScannerFill1Wght400Grad0Opsz48'
import IconScannerFill1Wght500Grad0Opsz48 from '../components/ScannerFill1Wght500Grad0Opsz48'
import IconScannerFill1Wght600Grad0Opsz48 from '../components/ScannerFill1Wght600Grad0Opsz48'
import IconScannerFill1Wght700Grad0Opsz48 from '../components/ScannerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScanner = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScannerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScannerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScannerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScannerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScannerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScannerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScannerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScannerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScannerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScannerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScannerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScannerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScannerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScannerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
