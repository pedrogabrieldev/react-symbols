import IconStayPrimaryPortraitFill0Wght100Grad0Opsz48 from '../components/StayPrimaryPortraitFill0Wght100Grad0Opsz48'
import IconStayPrimaryPortraitFill0Wght200Grad0Opsz48 from '../components/StayPrimaryPortraitFill0Wght200Grad0Opsz48'
import IconStayPrimaryPortraitFill0Wght300Grad0Opsz48 from '../components/StayPrimaryPortraitFill0Wght300Grad0Opsz48'
import IconStayPrimaryPortraitFill0Wght400Grad0Opsz48 from '../components/StayPrimaryPortraitFill0Wght400Grad0Opsz48'
import IconStayPrimaryPortraitFill0Wght500Grad0Opsz48 from '../components/StayPrimaryPortraitFill0Wght500Grad0Opsz48'
import IconStayPrimaryPortraitFill0Wght600Grad0Opsz48 from '../components/StayPrimaryPortraitFill0Wght600Grad0Opsz48'
import IconStayPrimaryPortraitFill0Wght700Grad0Opsz48 from '../components/StayPrimaryPortraitFill0Wght700Grad0Opsz48'
import IconStayPrimaryPortraitFill1Wght100Grad0Opsz48 from '../components/StayPrimaryPortraitFill1Wght100Grad0Opsz48'
import IconStayPrimaryPortraitFill1Wght200Grad0Opsz48 from '../components/StayPrimaryPortraitFill1Wght200Grad0Opsz48'
import IconStayPrimaryPortraitFill1Wght300Grad0Opsz48 from '../components/StayPrimaryPortraitFill1Wght300Grad0Opsz48'
import IconStayPrimaryPortraitFill1Wght400Grad0Opsz48 from '../components/StayPrimaryPortraitFill1Wght400Grad0Opsz48'
import IconStayPrimaryPortraitFill1Wght500Grad0Opsz48 from '../components/StayPrimaryPortraitFill1Wght500Grad0Opsz48'
import IconStayPrimaryPortraitFill1Wght600Grad0Opsz48 from '../components/StayPrimaryPortraitFill1Wght600Grad0Opsz48'
import IconStayPrimaryPortraitFill1Wght700Grad0Opsz48 from '../components/StayPrimaryPortraitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStayPrimaryPortrait = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStayPrimaryPortraitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStayPrimaryPortraitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStayPrimaryPortraitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStayPrimaryPortraitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStayPrimaryPortraitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStayPrimaryPortraitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStayPrimaryPortraitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStayPrimaryPortraitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStayPrimaryPortraitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStayPrimaryPortraitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStayPrimaryPortraitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStayPrimaryPortraitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStayPrimaryPortraitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStayPrimaryPortraitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
