import IconChromecastDeviceFill0Wght100Grad0Opsz48 from '../components/ChromecastDeviceFill0Wght100Grad0Opsz48'
import IconChromecastDeviceFill0Wght200Grad0Opsz48 from '../components/ChromecastDeviceFill0Wght200Grad0Opsz48'
import IconChromecastDeviceFill0Wght300Grad0Opsz48 from '../components/ChromecastDeviceFill0Wght300Grad0Opsz48'
import IconChromecastDeviceFill0Wght400Grad0Opsz48 from '../components/ChromecastDeviceFill0Wght400Grad0Opsz48'
import IconChromecastDeviceFill0Wght500Grad0Opsz48 from '../components/ChromecastDeviceFill0Wght500Grad0Opsz48'
import IconChromecastDeviceFill0Wght600Grad0Opsz48 from '../components/ChromecastDeviceFill0Wght600Grad0Opsz48'
import IconChromecastDeviceFill0Wght700Grad0Opsz48 from '../components/ChromecastDeviceFill0Wght700Grad0Opsz48'
import IconChromecastDeviceFill1Wght100Grad0Opsz48 from '../components/ChromecastDeviceFill1Wght100Grad0Opsz48'
import IconChromecastDeviceFill1Wght200Grad0Opsz48 from '../components/ChromecastDeviceFill1Wght200Grad0Opsz48'
import IconChromecastDeviceFill1Wght300Grad0Opsz48 from '../components/ChromecastDeviceFill1Wght300Grad0Opsz48'
import IconChromecastDeviceFill1Wght400Grad0Opsz48 from '../components/ChromecastDeviceFill1Wght400Grad0Opsz48'
import IconChromecastDeviceFill1Wght500Grad0Opsz48 from '../components/ChromecastDeviceFill1Wght500Grad0Opsz48'
import IconChromecastDeviceFill1Wght600Grad0Opsz48 from '../components/ChromecastDeviceFill1Wght600Grad0Opsz48'
import IconChromecastDeviceFill1Wght700Grad0Opsz48 from '../components/ChromecastDeviceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChromecastDevice = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChromecastDeviceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChromecastDeviceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChromecastDeviceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChromecastDeviceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChromecastDeviceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChromecastDeviceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChromecastDeviceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChromecastDeviceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChromecastDeviceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChromecastDeviceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChromecastDeviceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChromecastDeviceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChromecastDeviceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChromecastDeviceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
