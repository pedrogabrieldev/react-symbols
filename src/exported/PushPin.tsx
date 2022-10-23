import IconPushPinFill0Wght100Grad0Opsz48 from '../components/PushPinFill0Wght100Grad0Opsz48'
import IconPushPinFill0Wght200Grad0Opsz48 from '../components/PushPinFill0Wght200Grad0Opsz48'
import IconPushPinFill0Wght300Grad0Opsz48 from '../components/PushPinFill0Wght300Grad0Opsz48'
import IconPushPinFill0Wght400Grad0Opsz48 from '../components/PushPinFill0Wght400Grad0Opsz48'
import IconPushPinFill0Wght500Grad0Opsz48 from '../components/PushPinFill0Wght500Grad0Opsz48'
import IconPushPinFill0Wght600Grad0Opsz48 from '../components/PushPinFill0Wght600Grad0Opsz48'
import IconPushPinFill0Wght700Grad0Opsz48 from '../components/PushPinFill0Wght700Grad0Opsz48'
import IconPushPinFill1Wght100Grad0Opsz48 from '../components/PushPinFill1Wght100Grad0Opsz48'
import IconPushPinFill1Wght200Grad0Opsz48 from '../components/PushPinFill1Wght200Grad0Opsz48'
import IconPushPinFill1Wght300Grad0Opsz48 from '../components/PushPinFill1Wght300Grad0Opsz48'
import IconPushPinFill1Wght400Grad0Opsz48 from '../components/PushPinFill1Wght400Grad0Opsz48'
import IconPushPinFill1Wght500Grad0Opsz48 from '../components/PushPinFill1Wght500Grad0Opsz48'
import IconPushPinFill1Wght600Grad0Opsz48 from '../components/PushPinFill1Wght600Grad0Opsz48'
import IconPushPinFill1Wght700Grad0Opsz48 from '../components/PushPinFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPushPin = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPushPinFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPushPinFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPushPinFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPushPinFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPushPinFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPushPinFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPushPinFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPushPinFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPushPinFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPushPinFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPushPinFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPushPinFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPushPinFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPushPinFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
