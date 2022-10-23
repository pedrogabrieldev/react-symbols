import IconOpenInBrowserFill0Wght100Grad0Opsz48 from '../components/OpenInBrowserFill0Wght100Grad0Opsz48'
import IconOpenInBrowserFill0Wght200Grad0Opsz48 from '../components/OpenInBrowserFill0Wght200Grad0Opsz48'
import IconOpenInBrowserFill0Wght300Grad0Opsz48 from '../components/OpenInBrowserFill0Wght300Grad0Opsz48'
import IconOpenInBrowserFill0Wght400Grad0Opsz48 from '../components/OpenInBrowserFill0Wght400Grad0Opsz48'
import IconOpenInBrowserFill0Wght500Grad0Opsz48 from '../components/OpenInBrowserFill0Wght500Grad0Opsz48'
import IconOpenInBrowserFill0Wght600Grad0Opsz48 from '../components/OpenInBrowserFill0Wght600Grad0Opsz48'
import IconOpenInBrowserFill0Wght700Grad0Opsz48 from '../components/OpenInBrowserFill0Wght700Grad0Opsz48'
import IconOpenInBrowserFill1Wght100Grad0Opsz48 from '../components/OpenInBrowserFill1Wght100Grad0Opsz48'
import IconOpenInBrowserFill1Wght200Grad0Opsz48 from '../components/OpenInBrowserFill1Wght200Grad0Opsz48'
import IconOpenInBrowserFill1Wght300Grad0Opsz48 from '../components/OpenInBrowserFill1Wght300Grad0Opsz48'
import IconOpenInBrowserFill1Wght400Grad0Opsz48 from '../components/OpenInBrowserFill1Wght400Grad0Opsz48'
import IconOpenInBrowserFill1Wght500Grad0Opsz48 from '../components/OpenInBrowserFill1Wght500Grad0Opsz48'
import IconOpenInBrowserFill1Wght600Grad0Opsz48 from '../components/OpenInBrowserFill1Wght600Grad0Opsz48'
import IconOpenInBrowserFill1Wght700Grad0Opsz48 from '../components/OpenInBrowserFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOpenInBrowser = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOpenInBrowserFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOpenInBrowserFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOpenInBrowserFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOpenInBrowserFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOpenInBrowserFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOpenInBrowserFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOpenInBrowserFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOpenInBrowserFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOpenInBrowserFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOpenInBrowserFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOpenInBrowserFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOpenInBrowserFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOpenInBrowserFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOpenInBrowserFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
