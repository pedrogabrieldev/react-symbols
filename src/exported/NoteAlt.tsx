import IconNoteAltFill0Wght100Grad0Opsz48 from '../components/NoteAltFill0Wght100Grad0Opsz48'
import IconNoteAltFill0Wght200Grad0Opsz48 from '../components/NoteAltFill0Wght200Grad0Opsz48'
import IconNoteAltFill0Wght300Grad0Opsz48 from '../components/NoteAltFill0Wght300Grad0Opsz48'
import IconNoteAltFill0Wght400Grad0Opsz48 from '../components/NoteAltFill0Wght400Grad0Opsz48'
import IconNoteAltFill0Wght500Grad0Opsz48 from '../components/NoteAltFill0Wght500Grad0Opsz48'
import IconNoteAltFill0Wght600Grad0Opsz48 from '../components/NoteAltFill0Wght600Grad0Opsz48'
import IconNoteAltFill0Wght700Grad0Opsz48 from '../components/NoteAltFill0Wght700Grad0Opsz48'
import IconNoteAltFill1Wght100Grad0Opsz48 from '../components/NoteAltFill1Wght100Grad0Opsz48'
import IconNoteAltFill1Wght200Grad0Opsz48 from '../components/NoteAltFill1Wght200Grad0Opsz48'
import IconNoteAltFill1Wght300Grad0Opsz48 from '../components/NoteAltFill1Wght300Grad0Opsz48'
import IconNoteAltFill1Wght400Grad0Opsz48 from '../components/NoteAltFill1Wght400Grad0Opsz48'
import IconNoteAltFill1Wght500Grad0Opsz48 from '../components/NoteAltFill1Wght500Grad0Opsz48'
import IconNoteAltFill1Wght600Grad0Opsz48 from '../components/NoteAltFill1Wght600Grad0Opsz48'
import IconNoteAltFill1Wght700Grad0Opsz48 from '../components/NoteAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoteAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoteAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoteAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoteAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoteAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoteAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoteAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoteAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoteAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoteAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoteAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoteAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoteAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoteAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoteAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
