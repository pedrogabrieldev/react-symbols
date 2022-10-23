import IconStayCurrentPortraitFill0Wght100Grad0Opsz48 from '../components/StayCurrentPortraitFill0Wght100Grad0Opsz48'
import IconStayCurrentPortraitFill0Wght200Grad0Opsz48 from '../components/StayCurrentPortraitFill0Wght200Grad0Opsz48'
import IconStayCurrentPortraitFill0Wght300Grad0Opsz48 from '../components/StayCurrentPortraitFill0Wght300Grad0Opsz48'
import IconStayCurrentPortraitFill0Wght400Grad0Opsz48 from '../components/StayCurrentPortraitFill0Wght400Grad0Opsz48'
import IconStayCurrentPortraitFill0Wght500Grad0Opsz48 from '../components/StayCurrentPortraitFill0Wght500Grad0Opsz48'
import IconStayCurrentPortraitFill0Wght600Grad0Opsz48 from '../components/StayCurrentPortraitFill0Wght600Grad0Opsz48'
import IconStayCurrentPortraitFill0Wght700Grad0Opsz48 from '../components/StayCurrentPortraitFill0Wght700Grad0Opsz48'
import IconStayCurrentPortraitFill1Wght100Grad0Opsz48 from '../components/StayCurrentPortraitFill1Wght100Grad0Opsz48'
import IconStayCurrentPortraitFill1Wght200Grad0Opsz48 from '../components/StayCurrentPortraitFill1Wght200Grad0Opsz48'
import IconStayCurrentPortraitFill1Wght300Grad0Opsz48 from '../components/StayCurrentPortraitFill1Wght300Grad0Opsz48'
import IconStayCurrentPortraitFill1Wght400Grad0Opsz48 from '../components/StayCurrentPortraitFill1Wght400Grad0Opsz48'
import IconStayCurrentPortraitFill1Wght500Grad0Opsz48 from '../components/StayCurrentPortraitFill1Wght500Grad0Opsz48'
import IconStayCurrentPortraitFill1Wght600Grad0Opsz48 from '../components/StayCurrentPortraitFill1Wght600Grad0Opsz48'
import IconStayCurrentPortraitFill1Wght700Grad0Opsz48 from '../components/StayCurrentPortraitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStayCurrentPortrait = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStayCurrentPortraitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStayCurrentPortraitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStayCurrentPortraitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStayCurrentPortraitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStayCurrentPortraitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStayCurrentPortraitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStayCurrentPortraitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStayCurrentPortraitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStayCurrentPortraitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStayCurrentPortraitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStayCurrentPortraitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStayCurrentPortraitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStayCurrentPortraitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStayCurrentPortraitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
