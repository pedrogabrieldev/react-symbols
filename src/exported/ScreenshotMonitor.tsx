import IconScreenshotMonitorFill0Wght100Grad0Opsz48 from '../components/ScreenshotMonitorFill0Wght100Grad0Opsz48'
import IconScreenshotMonitorFill0Wght200Grad0Opsz48 from '../components/ScreenshotMonitorFill0Wght200Grad0Opsz48'
import IconScreenshotMonitorFill0Wght300Grad0Opsz48 from '../components/ScreenshotMonitorFill0Wght300Grad0Opsz48'
import IconScreenshotMonitorFill0Wght400Grad0Opsz48 from '../components/ScreenshotMonitorFill0Wght400Grad0Opsz48'
import IconScreenshotMonitorFill0Wght500Grad0Opsz48 from '../components/ScreenshotMonitorFill0Wght500Grad0Opsz48'
import IconScreenshotMonitorFill0Wght600Grad0Opsz48 from '../components/ScreenshotMonitorFill0Wght600Grad0Opsz48'
import IconScreenshotMonitorFill0Wght700Grad0Opsz48 from '../components/ScreenshotMonitorFill0Wght700Grad0Opsz48'
import IconScreenshotMonitorFill1Wght100Grad0Opsz48 from '../components/ScreenshotMonitorFill1Wght100Grad0Opsz48'
import IconScreenshotMonitorFill1Wght200Grad0Opsz48 from '../components/ScreenshotMonitorFill1Wght200Grad0Opsz48'
import IconScreenshotMonitorFill1Wght300Grad0Opsz48 from '../components/ScreenshotMonitorFill1Wght300Grad0Opsz48'
import IconScreenshotMonitorFill1Wght400Grad0Opsz48 from '../components/ScreenshotMonitorFill1Wght400Grad0Opsz48'
import IconScreenshotMonitorFill1Wght500Grad0Opsz48 from '../components/ScreenshotMonitorFill1Wght500Grad0Opsz48'
import IconScreenshotMonitorFill1Wght600Grad0Opsz48 from '../components/ScreenshotMonitorFill1Wght600Grad0Opsz48'
import IconScreenshotMonitorFill1Wght700Grad0Opsz48 from '../components/ScreenshotMonitorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScreenshotMonitor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScreenshotMonitorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScreenshotMonitorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScreenshotMonitorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScreenshotMonitorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScreenshotMonitorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScreenshotMonitorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScreenshotMonitorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScreenshotMonitorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScreenshotMonitorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScreenshotMonitorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScreenshotMonitorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScreenshotMonitorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScreenshotMonitorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScreenshotMonitorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
