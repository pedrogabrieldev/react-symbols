import IconChromeReaderModeFill0Wght100Grad0Opsz48 from '../components/ChromeReaderModeFill0Wght100Grad0Opsz48'
import IconChromeReaderModeFill0Wght200Grad0Opsz48 from '../components/ChromeReaderModeFill0Wght200Grad0Opsz48'
import IconChromeReaderModeFill0Wght300Grad0Opsz48 from '../components/ChromeReaderModeFill0Wght300Grad0Opsz48'
import IconChromeReaderModeFill0Wght400Grad0Opsz48 from '../components/ChromeReaderModeFill0Wght400Grad0Opsz48'
import IconChromeReaderModeFill0Wght500Grad0Opsz48 from '../components/ChromeReaderModeFill0Wght500Grad0Opsz48'
import IconChromeReaderModeFill0Wght600Grad0Opsz48 from '../components/ChromeReaderModeFill0Wght600Grad0Opsz48'
import IconChromeReaderModeFill0Wght700Grad0Opsz48 from '../components/ChromeReaderModeFill0Wght700Grad0Opsz48'
import IconChromeReaderModeFill1Wght100Grad0Opsz48 from '../components/ChromeReaderModeFill1Wght100Grad0Opsz48'
import IconChromeReaderModeFill1Wght200Grad0Opsz48 from '../components/ChromeReaderModeFill1Wght200Grad0Opsz48'
import IconChromeReaderModeFill1Wght300Grad0Opsz48 from '../components/ChromeReaderModeFill1Wght300Grad0Opsz48'
import IconChromeReaderModeFill1Wght400Grad0Opsz48 from '../components/ChromeReaderModeFill1Wght400Grad0Opsz48'
import IconChromeReaderModeFill1Wght500Grad0Opsz48 from '../components/ChromeReaderModeFill1Wght500Grad0Opsz48'
import IconChromeReaderModeFill1Wght600Grad0Opsz48 from '../components/ChromeReaderModeFill1Wght600Grad0Opsz48'
import IconChromeReaderModeFill1Wght700Grad0Opsz48 from '../components/ChromeReaderModeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChromeReaderMode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChromeReaderModeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChromeReaderModeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChromeReaderModeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChromeReaderModeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChromeReaderModeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChromeReaderModeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChromeReaderModeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChromeReaderModeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChromeReaderModeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChromeReaderModeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChromeReaderModeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChromeReaderModeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChromeReaderModeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChromeReaderModeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
