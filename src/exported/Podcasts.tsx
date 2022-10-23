import IconPodcastsFill0Wght100Grad0Opsz48 from '../components/PodcastsFill0Wght100Grad0Opsz48'
import IconPodcastsFill0Wght200Grad0Opsz48 from '../components/PodcastsFill0Wght200Grad0Opsz48'
import IconPodcastsFill0Wght300Grad0Opsz48 from '../components/PodcastsFill0Wght300Grad0Opsz48'
import IconPodcastsFill0Wght400Grad0Opsz48 from '../components/PodcastsFill0Wght400Grad0Opsz48'
import IconPodcastsFill0Wght500Grad0Opsz48 from '../components/PodcastsFill0Wght500Grad0Opsz48'
import IconPodcastsFill0Wght600Grad0Opsz48 from '../components/PodcastsFill0Wght600Grad0Opsz48'
import IconPodcastsFill0Wght700Grad0Opsz48 from '../components/PodcastsFill0Wght700Grad0Opsz48'
import IconPodcastsFill1Wght100Grad0Opsz48 from '../components/PodcastsFill1Wght100Grad0Opsz48'
import IconPodcastsFill1Wght200Grad0Opsz48 from '../components/PodcastsFill1Wght200Grad0Opsz48'
import IconPodcastsFill1Wght300Grad0Opsz48 from '../components/PodcastsFill1Wght300Grad0Opsz48'
import IconPodcastsFill1Wght400Grad0Opsz48 from '../components/PodcastsFill1Wght400Grad0Opsz48'
import IconPodcastsFill1Wght500Grad0Opsz48 from '../components/PodcastsFill1Wght500Grad0Opsz48'
import IconPodcastsFill1Wght600Grad0Opsz48 from '../components/PodcastsFill1Wght600Grad0Opsz48'
import IconPodcastsFill1Wght700Grad0Opsz48 from '../components/PodcastsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPodcasts = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPodcastsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPodcastsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPodcastsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPodcastsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPodcastsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPodcastsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPodcastsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPodcastsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPodcastsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPodcastsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPodcastsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPodcastsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPodcastsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPodcastsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
