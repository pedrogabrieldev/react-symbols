import IconSportsMartialArtsFill0Wght100Grad0Opsz48 from '../components/SportsMartialArtsFill0Wght100Grad0Opsz48'
import IconSportsMartialArtsFill0Wght200Grad0Opsz48 from '../components/SportsMartialArtsFill0Wght200Grad0Opsz48'
import IconSportsMartialArtsFill0Wght300Grad0Opsz48 from '../components/SportsMartialArtsFill0Wght300Grad0Opsz48'
import IconSportsMartialArtsFill0Wght400Grad0Opsz48 from '../components/SportsMartialArtsFill0Wght400Grad0Opsz48'
import IconSportsMartialArtsFill0Wght500Grad0Opsz48 from '../components/SportsMartialArtsFill0Wght500Grad0Opsz48'
import IconSportsMartialArtsFill0Wght600Grad0Opsz48 from '../components/SportsMartialArtsFill0Wght600Grad0Opsz48'
import IconSportsMartialArtsFill0Wght700Grad0Opsz48 from '../components/SportsMartialArtsFill0Wght700Grad0Opsz48'
import IconSportsMartialArtsFill1Wght100Grad0Opsz48 from '../components/SportsMartialArtsFill1Wght100Grad0Opsz48'
import IconSportsMartialArtsFill1Wght200Grad0Opsz48 from '../components/SportsMartialArtsFill1Wght200Grad0Opsz48'
import IconSportsMartialArtsFill1Wght300Grad0Opsz48 from '../components/SportsMartialArtsFill1Wght300Grad0Opsz48'
import IconSportsMartialArtsFill1Wght400Grad0Opsz48 from '../components/SportsMartialArtsFill1Wght400Grad0Opsz48'
import IconSportsMartialArtsFill1Wght500Grad0Opsz48 from '../components/SportsMartialArtsFill1Wght500Grad0Opsz48'
import IconSportsMartialArtsFill1Wght600Grad0Opsz48 from '../components/SportsMartialArtsFill1Wght600Grad0Opsz48'
import IconSportsMartialArtsFill1Wght700Grad0Opsz48 from '../components/SportsMartialArtsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsMartialArts = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsMartialArtsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsMartialArtsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsMartialArtsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsMartialArtsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsMartialArtsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsMartialArtsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsMartialArtsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsMartialArtsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsMartialArtsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsMartialArtsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsMartialArtsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsMartialArtsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsMartialArtsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsMartialArtsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
