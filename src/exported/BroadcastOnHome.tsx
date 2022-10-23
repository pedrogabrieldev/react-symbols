import IconBroadcastOnHomeFill0Wght100Grad0Opsz48 from '../components/BroadcastOnHomeFill0Wght100Grad0Opsz48'
import IconBroadcastOnHomeFill0Wght200Grad0Opsz48 from '../components/BroadcastOnHomeFill0Wght200Grad0Opsz48'
import IconBroadcastOnHomeFill0Wght300Grad0Opsz48 from '../components/BroadcastOnHomeFill0Wght300Grad0Opsz48'
import IconBroadcastOnHomeFill0Wght400Grad0Opsz48 from '../components/BroadcastOnHomeFill0Wght400Grad0Opsz48'
import IconBroadcastOnHomeFill0Wght500Grad0Opsz48 from '../components/BroadcastOnHomeFill0Wght500Grad0Opsz48'
import IconBroadcastOnHomeFill0Wght600Grad0Opsz48 from '../components/BroadcastOnHomeFill0Wght600Grad0Opsz48'
import IconBroadcastOnHomeFill0Wght700Grad0Opsz48 from '../components/BroadcastOnHomeFill0Wght700Grad0Opsz48'
import IconBroadcastOnHomeFill1Wght100Grad0Opsz48 from '../components/BroadcastOnHomeFill1Wght100Grad0Opsz48'
import IconBroadcastOnHomeFill1Wght200Grad0Opsz48 from '../components/BroadcastOnHomeFill1Wght200Grad0Opsz48'
import IconBroadcastOnHomeFill1Wght300Grad0Opsz48 from '../components/BroadcastOnHomeFill1Wght300Grad0Opsz48'
import IconBroadcastOnHomeFill1Wght400Grad0Opsz48 from '../components/BroadcastOnHomeFill1Wght400Grad0Opsz48'
import IconBroadcastOnHomeFill1Wght500Grad0Opsz48 from '../components/BroadcastOnHomeFill1Wght500Grad0Opsz48'
import IconBroadcastOnHomeFill1Wght600Grad0Opsz48 from '../components/BroadcastOnHomeFill1Wght600Grad0Opsz48'
import IconBroadcastOnHomeFill1Wght700Grad0Opsz48 from '../components/BroadcastOnHomeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBroadcastOnHome = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBroadcastOnHomeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBroadcastOnHomeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBroadcastOnHomeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBroadcastOnHomeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBroadcastOnHomeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBroadcastOnHomeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBroadcastOnHomeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBroadcastOnHomeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBroadcastOnHomeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBroadcastOnHomeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBroadcastOnHomeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBroadcastOnHomeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBroadcastOnHomeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBroadcastOnHomeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
