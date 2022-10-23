import IconFollowTheSignsFill0Wght100Grad0Opsz48 from '../components/FollowTheSignsFill0Wght100Grad0Opsz48'
import IconFollowTheSignsFill0Wght200Grad0Opsz48 from '../components/FollowTheSignsFill0Wght200Grad0Opsz48'
import IconFollowTheSignsFill0Wght300Grad0Opsz48 from '../components/FollowTheSignsFill0Wght300Grad0Opsz48'
import IconFollowTheSignsFill0Wght400Grad0Opsz48 from '../components/FollowTheSignsFill0Wght400Grad0Opsz48'
import IconFollowTheSignsFill0Wght500Grad0Opsz48 from '../components/FollowTheSignsFill0Wght500Grad0Opsz48'
import IconFollowTheSignsFill0Wght600Grad0Opsz48 from '../components/FollowTheSignsFill0Wght600Grad0Opsz48'
import IconFollowTheSignsFill0Wght700Grad0Opsz48 from '../components/FollowTheSignsFill0Wght700Grad0Opsz48'
import IconFollowTheSignsFill1Wght100Grad0Opsz48 from '../components/FollowTheSignsFill1Wght100Grad0Opsz48'
import IconFollowTheSignsFill1Wght200Grad0Opsz48 from '../components/FollowTheSignsFill1Wght200Grad0Opsz48'
import IconFollowTheSignsFill1Wght300Grad0Opsz48 from '../components/FollowTheSignsFill1Wght300Grad0Opsz48'
import IconFollowTheSignsFill1Wght400Grad0Opsz48 from '../components/FollowTheSignsFill1Wght400Grad0Opsz48'
import IconFollowTheSignsFill1Wght500Grad0Opsz48 from '../components/FollowTheSignsFill1Wght500Grad0Opsz48'
import IconFollowTheSignsFill1Wght600Grad0Opsz48 from '../components/FollowTheSignsFill1Wght600Grad0Opsz48'
import IconFollowTheSignsFill1Wght700Grad0Opsz48 from '../components/FollowTheSignsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFollowTheSigns = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFollowTheSignsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFollowTheSignsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFollowTheSignsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFollowTheSignsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFollowTheSignsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFollowTheSignsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFollowTheSignsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFollowTheSignsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFollowTheSignsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFollowTheSignsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFollowTheSignsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFollowTheSignsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFollowTheSignsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFollowTheSignsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
