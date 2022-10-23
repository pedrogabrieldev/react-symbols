import IconQrCodeScannerFill0Wght100Grad0Opsz48 from '../components/QrCodeScannerFill0Wght100Grad0Opsz48'
import IconQrCodeScannerFill0Wght200Grad0Opsz48 from '../components/QrCodeScannerFill0Wght200Grad0Opsz48'
import IconQrCodeScannerFill0Wght300Grad0Opsz48 from '../components/QrCodeScannerFill0Wght300Grad0Opsz48'
import IconQrCodeScannerFill0Wght400Grad0Opsz48 from '../components/QrCodeScannerFill0Wght400Grad0Opsz48'
import IconQrCodeScannerFill0Wght500Grad0Opsz48 from '../components/QrCodeScannerFill0Wght500Grad0Opsz48'
import IconQrCodeScannerFill0Wght600Grad0Opsz48 from '../components/QrCodeScannerFill0Wght600Grad0Opsz48'
import IconQrCodeScannerFill0Wght700Grad0Opsz48 from '../components/QrCodeScannerFill0Wght700Grad0Opsz48'
import IconQrCodeScannerFill1Wght100Grad0Opsz48 from '../components/QrCodeScannerFill1Wght100Grad0Opsz48'
import IconQrCodeScannerFill1Wght200Grad0Opsz48 from '../components/QrCodeScannerFill1Wght200Grad0Opsz48'
import IconQrCodeScannerFill1Wght300Grad0Opsz48 from '../components/QrCodeScannerFill1Wght300Grad0Opsz48'
import IconQrCodeScannerFill1Wght400Grad0Opsz48 from '../components/QrCodeScannerFill1Wght400Grad0Opsz48'
import IconQrCodeScannerFill1Wght500Grad0Opsz48 from '../components/QrCodeScannerFill1Wght500Grad0Opsz48'
import IconQrCodeScannerFill1Wght600Grad0Opsz48 from '../components/QrCodeScannerFill1Wght600Grad0Opsz48'
import IconQrCodeScannerFill1Wght700Grad0Opsz48 from '../components/QrCodeScannerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconQrCodeScanner = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconQrCodeScannerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconQrCodeScannerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconQrCodeScannerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconQrCodeScannerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconQrCodeScannerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconQrCodeScannerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconQrCodeScannerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconQrCodeScannerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconQrCodeScannerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconQrCodeScannerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconQrCodeScannerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconQrCodeScannerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconQrCodeScannerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconQrCodeScannerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
