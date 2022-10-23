import IconArtTrackFill0Wght100Grad0Opsz48 from '../components/ArtTrackFill0Wght100Grad0Opsz48'
import IconArtTrackFill0Wght200Grad0Opsz48 from '../components/ArtTrackFill0Wght200Grad0Opsz48'
import IconArtTrackFill0Wght300Grad0Opsz48 from '../components/ArtTrackFill0Wght300Grad0Opsz48'
import IconArtTrackFill0Wght400Grad0Opsz48 from '../components/ArtTrackFill0Wght400Grad0Opsz48'
import IconArtTrackFill0Wght500Grad0Opsz48 from '../components/ArtTrackFill0Wght500Grad0Opsz48'
import IconArtTrackFill0Wght600Grad0Opsz48 from '../components/ArtTrackFill0Wght600Grad0Opsz48'
import IconArtTrackFill0Wght700Grad0Opsz48 from '../components/ArtTrackFill0Wght700Grad0Opsz48'
import IconArtTrackFill1Wght100Grad0Opsz48 from '../components/ArtTrackFill1Wght100Grad0Opsz48'
import IconArtTrackFill1Wght200Grad0Opsz48 from '../components/ArtTrackFill1Wght200Grad0Opsz48'
import IconArtTrackFill1Wght300Grad0Opsz48 from '../components/ArtTrackFill1Wght300Grad0Opsz48'
import IconArtTrackFill1Wght400Grad0Opsz48 from '../components/ArtTrackFill1Wght400Grad0Opsz48'
import IconArtTrackFill1Wght500Grad0Opsz48 from '../components/ArtTrackFill1Wght500Grad0Opsz48'
import IconArtTrackFill1Wght600Grad0Opsz48 from '../components/ArtTrackFill1Wght600Grad0Opsz48'
import IconArtTrackFill1Wght700Grad0Opsz48 from '../components/ArtTrackFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArtTrack = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArtTrackFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArtTrackFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArtTrackFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArtTrackFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArtTrackFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArtTrackFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArtTrackFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArtTrackFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArtTrackFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArtTrackFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArtTrackFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArtTrackFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArtTrackFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArtTrackFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
