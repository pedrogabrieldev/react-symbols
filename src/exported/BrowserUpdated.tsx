import IconBrowserUpdatedFill0Wght100Grad0Opsz48 from '../components/BrowserUpdatedFill0Wght100Grad0Opsz48'
import IconBrowserUpdatedFill0Wght200Grad0Opsz48 from '../components/BrowserUpdatedFill0Wght200Grad0Opsz48'
import IconBrowserUpdatedFill0Wght300Grad0Opsz48 from '../components/BrowserUpdatedFill0Wght300Grad0Opsz48'
import IconBrowserUpdatedFill0Wght400Grad0Opsz48 from '../components/BrowserUpdatedFill0Wght400Grad0Opsz48'
import IconBrowserUpdatedFill0Wght500Grad0Opsz48 from '../components/BrowserUpdatedFill0Wght500Grad0Opsz48'
import IconBrowserUpdatedFill0Wght600Grad0Opsz48 from '../components/BrowserUpdatedFill0Wght600Grad0Opsz48'
import IconBrowserUpdatedFill0Wght700Grad0Opsz48 from '../components/BrowserUpdatedFill0Wght700Grad0Opsz48'
import IconBrowserUpdatedFill1Wght100Grad0Opsz48 from '../components/BrowserUpdatedFill1Wght100Grad0Opsz48'
import IconBrowserUpdatedFill1Wght200Grad0Opsz48 from '../components/BrowserUpdatedFill1Wght200Grad0Opsz48'
import IconBrowserUpdatedFill1Wght300Grad0Opsz48 from '../components/BrowserUpdatedFill1Wght300Grad0Opsz48'
import IconBrowserUpdatedFill1Wght400Grad0Opsz48 from '../components/BrowserUpdatedFill1Wght400Grad0Opsz48'
import IconBrowserUpdatedFill1Wght500Grad0Opsz48 from '../components/BrowserUpdatedFill1Wght500Grad0Opsz48'
import IconBrowserUpdatedFill1Wght600Grad0Opsz48 from '../components/BrowserUpdatedFill1Wght600Grad0Opsz48'
import IconBrowserUpdatedFill1Wght700Grad0Opsz48 from '../components/BrowserUpdatedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBrowserUpdated = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBrowserUpdatedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBrowserUpdatedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBrowserUpdatedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBrowserUpdatedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBrowserUpdatedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBrowserUpdatedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBrowserUpdatedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBrowserUpdatedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBrowserUpdatedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBrowserUpdatedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBrowserUpdatedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBrowserUpdatedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBrowserUpdatedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBrowserUpdatedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
