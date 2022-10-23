import IconLibraryMusicFill0Wght100Grad0Opsz48 from '../components/LibraryMusicFill0Wght100Grad0Opsz48'
import IconLibraryMusicFill0Wght200Grad0Opsz48 from '../components/LibraryMusicFill0Wght200Grad0Opsz48'
import IconLibraryMusicFill0Wght300Grad0Opsz48 from '../components/LibraryMusicFill0Wght300Grad0Opsz48'
import IconLibraryMusicFill0Wght400Grad0Opsz48 from '../components/LibraryMusicFill0Wght400Grad0Opsz48'
import IconLibraryMusicFill0Wght500Grad0Opsz48 from '../components/LibraryMusicFill0Wght500Grad0Opsz48'
import IconLibraryMusicFill0Wght600Grad0Opsz48 from '../components/LibraryMusicFill0Wght600Grad0Opsz48'
import IconLibraryMusicFill0Wght700Grad0Opsz48 from '../components/LibraryMusicFill0Wght700Grad0Opsz48'
import IconLibraryMusicFill1Wght100Grad0Opsz48 from '../components/LibraryMusicFill1Wght100Grad0Opsz48'
import IconLibraryMusicFill1Wght200Grad0Opsz48 from '../components/LibraryMusicFill1Wght200Grad0Opsz48'
import IconLibraryMusicFill1Wght300Grad0Opsz48 from '../components/LibraryMusicFill1Wght300Grad0Opsz48'
import IconLibraryMusicFill1Wght400Grad0Opsz48 from '../components/LibraryMusicFill1Wght400Grad0Opsz48'
import IconLibraryMusicFill1Wght500Grad0Opsz48 from '../components/LibraryMusicFill1Wght500Grad0Opsz48'
import IconLibraryMusicFill1Wght600Grad0Opsz48 from '../components/LibraryMusicFill1Wght600Grad0Opsz48'
import IconLibraryMusicFill1Wght700Grad0Opsz48 from '../components/LibraryMusicFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLibraryMusic = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLibraryMusicFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLibraryMusicFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLibraryMusicFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLibraryMusicFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLibraryMusicFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLibraryMusicFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLibraryMusicFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLibraryMusicFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLibraryMusicFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLibraryMusicFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLibraryMusicFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLibraryMusicFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLibraryMusicFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLibraryMusicFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
