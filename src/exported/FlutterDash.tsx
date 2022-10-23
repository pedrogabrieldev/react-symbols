import IconFlutterDashFill0Wght100Grad0Opsz48 from '../components/FlutterDashFill0Wght100Grad0Opsz48'
import IconFlutterDashFill0Wght200Grad0Opsz48 from '../components/FlutterDashFill0Wght200Grad0Opsz48'
import IconFlutterDashFill0Wght300Grad0Opsz48 from '../components/FlutterDashFill0Wght300Grad0Opsz48'
import IconFlutterDashFill0Wght400Grad0Opsz48 from '../components/FlutterDashFill0Wght400Grad0Opsz48'
import IconFlutterDashFill0Wght500Grad0Opsz48 from '../components/FlutterDashFill0Wght500Grad0Opsz48'
import IconFlutterDashFill0Wght600Grad0Opsz48 from '../components/FlutterDashFill0Wght600Grad0Opsz48'
import IconFlutterDashFill0Wght700Grad0Opsz48 from '../components/FlutterDashFill0Wght700Grad0Opsz48'
import IconFlutterDashFill1Wght100Grad0Opsz48 from '../components/FlutterDashFill1Wght100Grad0Opsz48'
import IconFlutterDashFill1Wght200Grad0Opsz48 from '../components/FlutterDashFill1Wght200Grad0Opsz48'
import IconFlutterDashFill1Wght300Grad0Opsz48 from '../components/FlutterDashFill1Wght300Grad0Opsz48'
import IconFlutterDashFill1Wght400Grad0Opsz48 from '../components/FlutterDashFill1Wght400Grad0Opsz48'
import IconFlutterDashFill1Wght500Grad0Opsz48 from '../components/FlutterDashFill1Wght500Grad0Opsz48'
import IconFlutterDashFill1Wght600Grad0Opsz48 from '../components/FlutterDashFill1Wght600Grad0Opsz48'
import IconFlutterDashFill1Wght700Grad0Opsz48 from '../components/FlutterDashFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlutterDash = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlutterDashFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlutterDashFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlutterDashFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlutterDashFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlutterDashFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlutterDashFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlutterDashFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlutterDashFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlutterDashFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlutterDashFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlutterDashFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlutterDashFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlutterDashFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlutterDashFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
