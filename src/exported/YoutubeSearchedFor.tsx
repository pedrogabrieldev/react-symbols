import IconYoutubeSearchedForFill0Wght100Grad0Opsz48 from '../components/YoutubeSearchedForFill0Wght100Grad0Opsz48'
import IconYoutubeSearchedForFill0Wght200Grad0Opsz48 from '../components/YoutubeSearchedForFill0Wght200Grad0Opsz48'
import IconYoutubeSearchedForFill0Wght300Grad0Opsz48 from '../components/YoutubeSearchedForFill0Wght300Grad0Opsz48'
import IconYoutubeSearchedForFill0Wght400Grad0Opsz48 from '../components/YoutubeSearchedForFill0Wght400Grad0Opsz48'
import IconYoutubeSearchedForFill0Wght500Grad0Opsz48 from '../components/YoutubeSearchedForFill0Wght500Grad0Opsz48'
import IconYoutubeSearchedForFill0Wght600Grad0Opsz48 from '../components/YoutubeSearchedForFill0Wght600Grad0Opsz48'
import IconYoutubeSearchedForFill0Wght700Grad0Opsz48 from '../components/YoutubeSearchedForFill0Wght700Grad0Opsz48'
import IconYoutubeSearchedForFill1Wght100Grad0Opsz48 from '../components/YoutubeSearchedForFill1Wght100Grad0Opsz48'
import IconYoutubeSearchedForFill1Wght200Grad0Opsz48 from '../components/YoutubeSearchedForFill1Wght200Grad0Opsz48'
import IconYoutubeSearchedForFill1Wght300Grad0Opsz48 from '../components/YoutubeSearchedForFill1Wght300Grad0Opsz48'
import IconYoutubeSearchedForFill1Wght400Grad0Opsz48 from '../components/YoutubeSearchedForFill1Wght400Grad0Opsz48'
import IconYoutubeSearchedForFill1Wght500Grad0Opsz48 from '../components/YoutubeSearchedForFill1Wght500Grad0Opsz48'
import IconYoutubeSearchedForFill1Wght600Grad0Opsz48 from '../components/YoutubeSearchedForFill1Wght600Grad0Opsz48'
import IconYoutubeSearchedForFill1Wght700Grad0Opsz48 from '../components/YoutubeSearchedForFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconYoutubeSearchedFor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconYoutubeSearchedForFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconYoutubeSearchedForFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconYoutubeSearchedForFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconYoutubeSearchedForFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconYoutubeSearchedForFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconYoutubeSearchedForFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconYoutubeSearchedForFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconYoutubeSearchedForFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconYoutubeSearchedForFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconYoutubeSearchedForFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconYoutubeSearchedForFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconYoutubeSearchedForFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconYoutubeSearchedForFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconYoutubeSearchedForFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
