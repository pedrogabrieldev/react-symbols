import IconUsbOffFill0Wght100Grad0Opsz48 from '../components/UsbOffFill0Wght100Grad0Opsz48'
import IconUsbOffFill0Wght200Grad0Opsz48 from '../components/UsbOffFill0Wght200Grad0Opsz48'
import IconUsbOffFill0Wght300Grad0Opsz48 from '../components/UsbOffFill0Wght300Grad0Opsz48'
import IconUsbOffFill0Wght400Grad0Opsz48 from '../components/UsbOffFill0Wght400Grad0Opsz48'
import IconUsbOffFill0Wght500Grad0Opsz48 from '../components/UsbOffFill0Wght500Grad0Opsz48'
import IconUsbOffFill0Wght600Grad0Opsz48 from '../components/UsbOffFill0Wght600Grad0Opsz48'
import IconUsbOffFill0Wght700Grad0Opsz48 from '../components/UsbOffFill0Wght700Grad0Opsz48'
import IconUsbOffFill1Wght100Grad0Opsz48 from '../components/UsbOffFill1Wght100Grad0Opsz48'
import IconUsbOffFill1Wght200Grad0Opsz48 from '../components/UsbOffFill1Wght200Grad0Opsz48'
import IconUsbOffFill1Wght300Grad0Opsz48 from '../components/UsbOffFill1Wght300Grad0Opsz48'
import IconUsbOffFill1Wght400Grad0Opsz48 from '../components/UsbOffFill1Wght400Grad0Opsz48'
import IconUsbOffFill1Wght500Grad0Opsz48 from '../components/UsbOffFill1Wght500Grad0Opsz48'
import IconUsbOffFill1Wght600Grad0Opsz48 from '../components/UsbOffFill1Wght600Grad0Opsz48'
import IconUsbOffFill1Wght700Grad0Opsz48 from '../components/UsbOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUsbOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUsbOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUsbOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUsbOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUsbOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUsbOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUsbOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUsbOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUsbOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUsbOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUsbOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUsbOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUsbOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUsbOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUsbOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
