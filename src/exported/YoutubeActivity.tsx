import IconYoutubeActivityFill0Wght100Grad0Opsz48 from '../components/YoutubeActivityFill0Wght100Grad0Opsz48'
import IconYoutubeActivityFill0Wght200Grad0Opsz48 from '../components/YoutubeActivityFill0Wght200Grad0Opsz48'
import IconYoutubeActivityFill0Wght300Grad0Opsz48 from '../components/YoutubeActivityFill0Wght300Grad0Opsz48'
import IconYoutubeActivityFill0Wght400Grad0Opsz48 from '../components/YoutubeActivityFill0Wght400Grad0Opsz48'
import IconYoutubeActivityFill0Wght500Grad0Opsz48 from '../components/YoutubeActivityFill0Wght500Grad0Opsz48'
import IconYoutubeActivityFill0Wght600Grad0Opsz48 from '../components/YoutubeActivityFill0Wght600Grad0Opsz48'
import IconYoutubeActivityFill0Wght700Grad0Opsz48 from '../components/YoutubeActivityFill0Wght700Grad0Opsz48'
import IconYoutubeActivityFill1Wght100Grad0Opsz48 from '../components/YoutubeActivityFill1Wght100Grad0Opsz48'
import IconYoutubeActivityFill1Wght200Grad0Opsz48 from '../components/YoutubeActivityFill1Wght200Grad0Opsz48'
import IconYoutubeActivityFill1Wght300Grad0Opsz48 from '../components/YoutubeActivityFill1Wght300Grad0Opsz48'
import IconYoutubeActivityFill1Wght400Grad0Opsz48 from '../components/YoutubeActivityFill1Wght400Grad0Opsz48'
import IconYoutubeActivityFill1Wght500Grad0Opsz48 from '../components/YoutubeActivityFill1Wght500Grad0Opsz48'
import IconYoutubeActivityFill1Wght600Grad0Opsz48 from '../components/YoutubeActivityFill1Wght600Grad0Opsz48'
import IconYoutubeActivityFill1Wght700Grad0Opsz48 from '../components/YoutubeActivityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconYoutubeActivity = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconYoutubeActivityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconYoutubeActivityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconYoutubeActivityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconYoutubeActivityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconYoutubeActivityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconYoutubeActivityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconYoutubeActivityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconYoutubeActivityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconYoutubeActivityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconYoutubeActivityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconYoutubeActivityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconYoutubeActivityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconYoutubeActivityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconYoutubeActivityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
