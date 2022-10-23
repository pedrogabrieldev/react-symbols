import IconUsbFill0Wght100Grad0Opsz48 from '../components/UsbFill0Wght100Grad0Opsz48'
import IconUsbFill0Wght200Grad0Opsz48 from '../components/UsbFill0Wght200Grad0Opsz48'
import IconUsbFill0Wght300Grad0Opsz48 from '../components/UsbFill0Wght300Grad0Opsz48'
import IconUsbFill0Wght400Grad0Opsz48 from '../components/UsbFill0Wght400Grad0Opsz48'
import IconUsbFill0Wght500Grad0Opsz48 from '../components/UsbFill0Wght500Grad0Opsz48'
import IconUsbFill0Wght600Grad0Opsz48 from '../components/UsbFill0Wght600Grad0Opsz48'
import IconUsbFill0Wght700Grad0Opsz48 from '../components/UsbFill0Wght700Grad0Opsz48'
import IconUsbFill1Wght100Grad0Opsz48 from '../components/UsbFill1Wght100Grad0Opsz48'
import IconUsbFill1Wght200Grad0Opsz48 from '../components/UsbFill1Wght200Grad0Opsz48'
import IconUsbFill1Wght300Grad0Opsz48 from '../components/UsbFill1Wght300Grad0Opsz48'
import IconUsbFill1Wght400Grad0Opsz48 from '../components/UsbFill1Wght400Grad0Opsz48'
import IconUsbFill1Wght500Grad0Opsz48 from '../components/UsbFill1Wght500Grad0Opsz48'
import IconUsbFill1Wght600Grad0Opsz48 from '../components/UsbFill1Wght600Grad0Opsz48'
import IconUsbFill1Wght700Grad0Opsz48 from '../components/UsbFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUsb = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUsbFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUsbFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUsbFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUsbFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUsbFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUsbFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUsbFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUsbFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUsbFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUsbFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUsbFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUsbFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUsbFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUsbFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
