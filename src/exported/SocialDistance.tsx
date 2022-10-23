import IconSocialDistanceFill0Wght100Grad0Opsz48 from '../components/SocialDistanceFill0Wght100Grad0Opsz48'
import IconSocialDistanceFill0Wght200Grad0Opsz48 from '../components/SocialDistanceFill0Wght200Grad0Opsz48'
import IconSocialDistanceFill0Wght300Grad0Opsz48 from '../components/SocialDistanceFill0Wght300Grad0Opsz48'
import IconSocialDistanceFill0Wght400Grad0Opsz48 from '../components/SocialDistanceFill0Wght400Grad0Opsz48'
import IconSocialDistanceFill0Wght500Grad0Opsz48 from '../components/SocialDistanceFill0Wght500Grad0Opsz48'
import IconSocialDistanceFill0Wght600Grad0Opsz48 from '../components/SocialDistanceFill0Wght600Grad0Opsz48'
import IconSocialDistanceFill0Wght700Grad0Opsz48 from '../components/SocialDistanceFill0Wght700Grad0Opsz48'
import IconSocialDistanceFill1Wght100Grad0Opsz48 from '../components/SocialDistanceFill1Wght100Grad0Opsz48'
import IconSocialDistanceFill1Wght200Grad0Opsz48 from '../components/SocialDistanceFill1Wght200Grad0Opsz48'
import IconSocialDistanceFill1Wght300Grad0Opsz48 from '../components/SocialDistanceFill1Wght300Grad0Opsz48'
import IconSocialDistanceFill1Wght400Grad0Opsz48 from '../components/SocialDistanceFill1Wght400Grad0Opsz48'
import IconSocialDistanceFill1Wght500Grad0Opsz48 from '../components/SocialDistanceFill1Wght500Grad0Opsz48'
import IconSocialDistanceFill1Wght600Grad0Opsz48 from '../components/SocialDistanceFill1Wght600Grad0Opsz48'
import IconSocialDistanceFill1Wght700Grad0Opsz48 from '../components/SocialDistanceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSocialDistance = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSocialDistanceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSocialDistanceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSocialDistanceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSocialDistanceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSocialDistanceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSocialDistanceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSocialDistanceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSocialDistanceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSocialDistanceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSocialDistanceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSocialDistanceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSocialDistanceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSocialDistanceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSocialDistanceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
