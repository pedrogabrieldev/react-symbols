import IconTrackChangesFill0Wght100Grad0Opsz48 from '../components/TrackChangesFill0Wght100Grad0Opsz48'
import IconTrackChangesFill0Wght200Grad0Opsz48 from '../components/TrackChangesFill0Wght200Grad0Opsz48'
import IconTrackChangesFill0Wght300Grad0Opsz48 from '../components/TrackChangesFill0Wght300Grad0Opsz48'
import IconTrackChangesFill0Wght400Grad0Opsz48 from '../components/TrackChangesFill0Wght400Grad0Opsz48'
import IconTrackChangesFill0Wght500Grad0Opsz48 from '../components/TrackChangesFill0Wght500Grad0Opsz48'
import IconTrackChangesFill0Wght600Grad0Opsz48 from '../components/TrackChangesFill0Wght600Grad0Opsz48'
import IconTrackChangesFill0Wght700Grad0Opsz48 from '../components/TrackChangesFill0Wght700Grad0Opsz48'
import IconTrackChangesFill1Wght100Grad0Opsz48 from '../components/TrackChangesFill1Wght100Grad0Opsz48'
import IconTrackChangesFill1Wght200Grad0Opsz48 from '../components/TrackChangesFill1Wght200Grad0Opsz48'
import IconTrackChangesFill1Wght300Grad0Opsz48 from '../components/TrackChangesFill1Wght300Grad0Opsz48'
import IconTrackChangesFill1Wght400Grad0Opsz48 from '../components/TrackChangesFill1Wght400Grad0Opsz48'
import IconTrackChangesFill1Wght500Grad0Opsz48 from '../components/TrackChangesFill1Wght500Grad0Opsz48'
import IconTrackChangesFill1Wght600Grad0Opsz48 from '../components/TrackChangesFill1Wght600Grad0Opsz48'
import IconTrackChangesFill1Wght700Grad0Opsz48 from '../components/TrackChangesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTrackChanges = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTrackChangesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTrackChangesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTrackChangesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTrackChangesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTrackChangesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTrackChangesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTrackChangesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTrackChangesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTrackChangesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTrackChangesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTrackChangesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTrackChangesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTrackChangesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTrackChangesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
