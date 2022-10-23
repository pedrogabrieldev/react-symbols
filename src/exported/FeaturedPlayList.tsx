import IconFeaturedPlayListFill0Wght100Grad0Opsz48 from '../components/FeaturedPlayListFill0Wght100Grad0Opsz48'
import IconFeaturedPlayListFill0Wght200Grad0Opsz48 from '../components/FeaturedPlayListFill0Wght200Grad0Opsz48'
import IconFeaturedPlayListFill0Wght300Grad0Opsz48 from '../components/FeaturedPlayListFill0Wght300Grad0Opsz48'
import IconFeaturedPlayListFill0Wght400Grad0Opsz48 from '../components/FeaturedPlayListFill0Wght400Grad0Opsz48'
import IconFeaturedPlayListFill0Wght500Grad0Opsz48 from '../components/FeaturedPlayListFill0Wght500Grad0Opsz48'
import IconFeaturedPlayListFill0Wght600Grad0Opsz48 from '../components/FeaturedPlayListFill0Wght600Grad0Opsz48'
import IconFeaturedPlayListFill0Wght700Grad0Opsz48 from '../components/FeaturedPlayListFill0Wght700Grad0Opsz48'
import IconFeaturedPlayListFill1Wght100Grad0Opsz48 from '../components/FeaturedPlayListFill1Wght100Grad0Opsz48'
import IconFeaturedPlayListFill1Wght200Grad0Opsz48 from '../components/FeaturedPlayListFill1Wght200Grad0Opsz48'
import IconFeaturedPlayListFill1Wght300Grad0Opsz48 from '../components/FeaturedPlayListFill1Wght300Grad0Opsz48'
import IconFeaturedPlayListFill1Wght400Grad0Opsz48 from '../components/FeaturedPlayListFill1Wght400Grad0Opsz48'
import IconFeaturedPlayListFill1Wght500Grad0Opsz48 from '../components/FeaturedPlayListFill1Wght500Grad0Opsz48'
import IconFeaturedPlayListFill1Wght600Grad0Opsz48 from '../components/FeaturedPlayListFill1Wght600Grad0Opsz48'
import IconFeaturedPlayListFill1Wght700Grad0Opsz48 from '../components/FeaturedPlayListFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFeaturedPlayList = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFeaturedPlayListFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFeaturedPlayListFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFeaturedPlayListFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFeaturedPlayListFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFeaturedPlayListFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFeaturedPlayListFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFeaturedPlayListFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFeaturedPlayListFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFeaturedPlayListFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFeaturedPlayListFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFeaturedPlayListFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFeaturedPlayListFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFeaturedPlayListFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFeaturedPlayListFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
