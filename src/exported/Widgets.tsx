import IconWidgetsFill0Wght100Grad0Opsz48 from '../components/WidgetsFill0Wght100Grad0Opsz48'
import IconWidgetsFill0Wght200Grad0Opsz48 from '../components/WidgetsFill0Wght200Grad0Opsz48'
import IconWidgetsFill0Wght300Grad0Opsz48 from '../components/WidgetsFill0Wght300Grad0Opsz48'
import IconWidgetsFill0Wght400Grad0Opsz48 from '../components/WidgetsFill0Wght400Grad0Opsz48'
import IconWidgetsFill0Wght500Grad0Opsz48 from '../components/WidgetsFill0Wght500Grad0Opsz48'
import IconWidgetsFill0Wght600Grad0Opsz48 from '../components/WidgetsFill0Wght600Grad0Opsz48'
import IconWidgetsFill0Wght700Grad0Opsz48 from '../components/WidgetsFill0Wght700Grad0Opsz48'
import IconWidgetsFill1Wght100Grad0Opsz48 from '../components/WidgetsFill1Wght100Grad0Opsz48'
import IconWidgetsFill1Wght200Grad0Opsz48 from '../components/WidgetsFill1Wght200Grad0Opsz48'
import IconWidgetsFill1Wght300Grad0Opsz48 from '../components/WidgetsFill1Wght300Grad0Opsz48'
import IconWidgetsFill1Wght400Grad0Opsz48 from '../components/WidgetsFill1Wght400Grad0Opsz48'
import IconWidgetsFill1Wght500Grad0Opsz48 from '../components/WidgetsFill1Wght500Grad0Opsz48'
import IconWidgetsFill1Wght600Grad0Opsz48 from '../components/WidgetsFill1Wght600Grad0Opsz48'
import IconWidgetsFill1Wght700Grad0Opsz48 from '../components/WidgetsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWidgets = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWidgetsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWidgetsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWidgetsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWidgetsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWidgetsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWidgetsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWidgetsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWidgetsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWidgetsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWidgetsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWidgetsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWidgetsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWidgetsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWidgetsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
