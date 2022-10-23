import IconQrCodeFill0Wght100Grad0Opsz48 from '../components/QrCodeFill0Wght100Grad0Opsz48'
import IconQrCodeFill0Wght200Grad0Opsz48 from '../components/QrCodeFill0Wght200Grad0Opsz48'
import IconQrCodeFill0Wght300Grad0Opsz48 from '../components/QrCodeFill0Wght300Grad0Opsz48'
import IconQrCodeFill0Wght400Grad0Opsz48 from '../components/QrCodeFill0Wght400Grad0Opsz48'
import IconQrCodeFill0Wght500Grad0Opsz48 from '../components/QrCodeFill0Wght500Grad0Opsz48'
import IconQrCodeFill0Wght600Grad0Opsz48 from '../components/QrCodeFill0Wght600Grad0Opsz48'
import IconQrCodeFill0Wght700Grad0Opsz48 from '../components/QrCodeFill0Wght700Grad0Opsz48'
import IconQrCodeFill1Wght100Grad0Opsz48 from '../components/QrCodeFill1Wght100Grad0Opsz48'
import IconQrCodeFill1Wght200Grad0Opsz48 from '../components/QrCodeFill1Wght200Grad0Opsz48'
import IconQrCodeFill1Wght300Grad0Opsz48 from '../components/QrCodeFill1Wght300Grad0Opsz48'
import IconQrCodeFill1Wght400Grad0Opsz48 from '../components/QrCodeFill1Wght400Grad0Opsz48'
import IconQrCodeFill1Wght500Grad0Opsz48 from '../components/QrCodeFill1Wght500Grad0Opsz48'
import IconQrCodeFill1Wght600Grad0Opsz48 from '../components/QrCodeFill1Wght600Grad0Opsz48'
import IconQrCodeFill1Wght700Grad0Opsz48 from '../components/QrCodeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconQrCode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconQrCodeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconQrCodeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconQrCodeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconQrCodeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconQrCodeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconQrCodeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconQrCodeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconQrCodeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconQrCodeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconQrCodeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconQrCodeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconQrCodeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconQrCodeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconQrCodeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
