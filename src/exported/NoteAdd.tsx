import IconNoteAddFill0Wght100Grad0Opsz48 from '../components/NoteAddFill0Wght100Grad0Opsz48'
import IconNoteAddFill0Wght200Grad0Opsz48 from '../components/NoteAddFill0Wght200Grad0Opsz48'
import IconNoteAddFill0Wght300Grad0Opsz48 from '../components/NoteAddFill0Wght300Grad0Opsz48'
import IconNoteAddFill0Wght400Grad0Opsz48 from '../components/NoteAddFill0Wght400Grad0Opsz48'
import IconNoteAddFill0Wght500Grad0Opsz48 from '../components/NoteAddFill0Wght500Grad0Opsz48'
import IconNoteAddFill0Wght600Grad0Opsz48 from '../components/NoteAddFill0Wght600Grad0Opsz48'
import IconNoteAddFill0Wght700Grad0Opsz48 from '../components/NoteAddFill0Wght700Grad0Opsz48'
import IconNoteAddFill1Wght100Grad0Opsz48 from '../components/NoteAddFill1Wght100Grad0Opsz48'
import IconNoteAddFill1Wght200Grad0Opsz48 from '../components/NoteAddFill1Wght200Grad0Opsz48'
import IconNoteAddFill1Wght300Grad0Opsz48 from '../components/NoteAddFill1Wght300Grad0Opsz48'
import IconNoteAddFill1Wght400Grad0Opsz48 from '../components/NoteAddFill1Wght400Grad0Opsz48'
import IconNoteAddFill1Wght500Grad0Opsz48 from '../components/NoteAddFill1Wght500Grad0Opsz48'
import IconNoteAddFill1Wght600Grad0Opsz48 from '../components/NoteAddFill1Wght600Grad0Opsz48'
import IconNoteAddFill1Wght700Grad0Opsz48 from '../components/NoteAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoteAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoteAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoteAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoteAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoteAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoteAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoteAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoteAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoteAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoteAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoteAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoteAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoteAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoteAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoteAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
