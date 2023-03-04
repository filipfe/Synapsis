from sqlalchemy import Column, Integer, String, TIMESTAMP, text as atext

from db.database import Base


class New(Base):
    __tablename__ = "news"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    desc = Column(String, nullable=False)
    date = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=atext("now()"))