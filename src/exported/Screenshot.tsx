import IconScreenshotFill0Wght100Grad0Opsz48 from '../components/ScreenshotFill0Wght100Grad0Opsz48'
import IconScreenshotFill0Wght200Grad0Opsz48 from '../components/ScreenshotFill0Wght200Grad0Opsz48'
import IconScreenshotFill0Wght300Grad0Opsz48 from '../components/ScreenshotFill0Wght300Grad0Opsz48'
import IconScreenshotFill0Wght400Grad0Opsz48 from '../components/ScreenshotFill0Wght400Grad0Opsz48'
import IconScreenshotFill0Wght500Grad0Opsz48 from '../components/ScreenshotFill0Wght500Grad0Opsz48'
import IconScreenshotFill0Wght600Grad0Opsz48 from '../components/ScreenshotFill0Wght600Grad0Opsz48'
import IconScreenshotFill0Wght700Grad0Opsz48 from '../components/ScreenshotFill0Wght700Grad0Opsz48'
import IconScreenshotFill1Wght100Grad0Opsz48 from '../components/ScreenshotFill1Wght100Grad0Opsz48'
import IconScreenshotFill1Wght200Grad0Opsz48 from '../components/ScreenshotFill1Wght200Grad0Opsz48'
import IconScreenshotFill1Wght300Grad0Opsz48 from '../components/ScreenshotFill1Wght300Grad0Opsz48'
import IconScreenshotFill1Wght400Grad0Opsz48 from '../components/ScreenshotFill1Wght400Grad0Opsz48'
import IconScreenshotFill1Wght500Grad0Opsz48 from '../components/ScreenshotFill1Wght500Grad0Opsz48'
import IconScreenshotFill1Wght600Grad0Opsz48 from '../components/ScreenshotFill1Wght600Grad0Opsz48'
import IconScreenshotFill1Wght700Grad0Opsz48 from '../components/ScreenshotFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScreenshot = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScreenshotFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScreenshotFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScreenshotFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScreenshotFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScreenshotFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScreenshotFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScreenshotFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScreenshotFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScreenshotFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScreenshotFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScreenshotFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScreenshotFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScreenshotFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScreenshotFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
